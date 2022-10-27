import { mock } from 'jest-mock-extended';
import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import { CreateEmployeePort } from 'src/domain/ports/repositories/create-employee.port';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';
import { createEmployeeFixture } from '../../../utils/fixture/create-employee.fixture';
import { employeeFixture } from '../../../utils/fixture/employee.fixture';
import { CreateEmployeeUseCase } from './create-employee.usecase';

describe('CreateEmployeeUseCase - Unit test', () => {
  const getEmployeeByKeys = mock<GetEmployeeByUniqueKeyPort>();
  const createEmployeePort = mock<CreateEmployeePort>();
  const employeeFactory = mock<EmployeeFactory>();
  const employeeEntity = mock<Employee>();
  beforeEach(() => {
    getEmployeeByKeys.execute.mockResolvedValue(createEmployeeFixture());
    createEmployeePort.execute.mockResolvedValue();
    employeeEntity.get.mockReturnValue(employeeFixture());
    employeeFactory.getInstance.mockReturnValue(employeeEntity);
  });
  it('Should return an exception if there is already an employee for the given cpf ', async () => {
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      getEmployeeByKeys,
      createEmployeePort,
      employeeFactory,
    );
    await expect(
      createEmployeeUseCase.execute(createEmployeeFixture()),
    ).rejects.toThrowError(
      new Error('There is already an employee registered with this cpf'),
    );
  });

  it('Should return an exception if EmployeeEntity throws', async () => {
    employeeFactory.getInstance.mockImplementation(() => {
      throw new Error('Error');
    });
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      getEmployeeByKeys,
      createEmployeePort,
      employeeFactory,
    );

    await expect(
      createEmployeeUseCase.execute(createEmployeeFixture()),
    ).rejects.toThrow(new Error('Errors'));
  });

  it('Should create employee with success', async () => {
    getEmployeeByKeys.execute.mockResolvedValue(undefined);
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      getEmployeeByKeys,
      createEmployeePort,
      employeeFactory,
    );
    await createEmployeeUseCase.execute(createEmployeeFixture());
    expect(createEmployeePort.execute).toHaveBeenCalledWith(employeeFixture());
  });
});
