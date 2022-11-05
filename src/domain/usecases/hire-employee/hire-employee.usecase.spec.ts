import { mock } from 'jest-mock-extended';
import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';
import { HireEmployeePort } from 'src/domain/ports/repositories/hire-employee.port';
import { employeeFixture } from '../../../utils/fixture/employee.fixture';
import { hireEmployeeFixture } from '../../../utils/fixture/hire-employee.fixture';
import { Employee } from '../../entities/employee/employee.entity';
import { HireEmployeeUseCase } from './hire-employee.usecase';

describe('HireEmployeeUseCase - Unit test', () => {
  const employee = new Employee(employeeFixture());
  const getEmployeeByKeys = mock<GetEmployeeByUniqueKeyPort>();
  const hireEmployeePort = mock<HireEmployeePort>();
  const employeeFactory = mock<EmployeeFactory>();
  const employeeEntity = mock<Employee>();
  beforeEach(() => {
    getEmployeeByKeys.execute.mockResolvedValue(hireEmployeeFixture());
    hireEmployeePort.execute.mockResolvedValue();
    employeeEntity.get.mockReturnValue(employeeFixture());
    employeeFactory.getInstance.mockReturnValue(employeeEntity);
  });
  it('Should return an exception if there is already an employee for the given cpf ', async () => {
    const hireEmployeeUseCase = new HireEmployeeUseCase(
      employee,
      getEmployeeByKeys,
      hireEmployeePort,
    );
    await expect(hireEmployeeUseCase.execute()).rejects.toThrowError(
      new Error('There is already an employee registered with this cpf'),
    );
  });

  it('Should hire employee with success', async () => {
    getEmployeeByKeys.execute.mockResolvedValue(undefined);
    const hireEmployeeUseCase = new HireEmployeeUseCase(
      employee,
      getEmployeeByKeys,
      hireEmployeePort,
    );
    await hireEmployeeUseCase.execute();
    expect(hireEmployeePort.execute).toHaveBeenCalledWith(employeeFixture());
  });
});
