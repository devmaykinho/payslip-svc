import { mock } from 'jest-mock-extended';
import { Employee } from '../../../domain/entities/employee/employee.entity';
import { EmployeeFactory } from '../../../domain/interfaces/factories/employee/employee.factory';
import { EmployeeRepository } from '../../../domain/interfaces/repositories/employee.repository';
import { HireEmployeeUseCase } from '../../../domain/usecases/hire-employee/hire-employee.usecase';
import { employeeFixture } from '../../mocks/fixture/employee.fixture';
import { hireEmployeeFixture } from '../../mocks/fixture/hire-employee.fixture';

describe('HireEmployeeUseCase - Unit test', () => {
  const admissionDate = new Date('2022-01-01T00:00:00.000Z');
  const dismissalDate = null;
  const employeeRepository = mock<EmployeeRepository>();
  const employeeFactory = mock<EmployeeFactory>();
  let hireEmployeeUseCase: HireEmployeeUseCase;

  beforeEach(() => {
    const employee = new Employee(
      employeeFixture({ admissionDate, dismissalDate }),
    );
    employeeRepository.save.mockResolvedValue();
    employeeFactory.getInstance.mockReturnValue(employee);
    hireEmployeeUseCase = new HireEmployeeUseCase(
      employeeRepository,
      employeeFactory,
    );
  });

  it('Should hire employee with success', async () => {
    await hireEmployeeUseCase.execute(
      hireEmployeeFixture({ admissionDate, dismissalDate }),
    );
    expect(employeeRepository.save).toHaveBeenCalledWith(
      new Employee(employeeFixture({ admissionDate, dismissalDate })),
    );
  });

  it('Should return an exception if employee factory fail', async () => {
    employeeFactory.getInstance.mockImplementation(() => {
      throw new Error('Invalid employee');
    });

    await expect(() =>
      hireEmployeeUseCase.execute(
        hireEmployeeFixture({ admissionDate, dismissalDate }),
      ),
    ).rejects.toThrow(new Error('Invalid employee'));
  });
});
