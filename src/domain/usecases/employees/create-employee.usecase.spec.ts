import { mock } from 'jest-mock-extended';
import { EmployeeEntity } from 'src/domain/entities/employee/employee.entity';
import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import { CreateEmployeePort } from 'src/domain/ports/repositories/create-employee.port';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';
import { employeeCreatedFixture } from '../../../utils/fixture/employee-created.fixture';
import { employeeEntityFixture } from '../../../utils/fixture/employee.entity.fixture';
import { CreateEmployeeUseCase } from './create-employee.usecase';

describe('CreateEmployeeUseCase - Unit test', () => {
  const getEmployeeByKeys = mock<GetEmployeeByUniqueKeyPort>();
  const createEmployeePort = mock<CreateEmployeePort>();
  const employeeFactory = mock<EmployeeFactory>();
  const employeeEntity = mock<EmployeeEntity>();
  beforeEach(() => {
    getEmployeeByKeys.execute.mockResolvedValue(employeeCreatedFixture());
    createEmployeePort.execute.mockResolvedValue();
    employeeEntity.get.mockReturnValue(employeeEntityFixture());
    employeeFactory.getInstance.mockReturnValue(employeeEntity);
  });
  it('Should return an exception if there is already an employee for the given cpf ', async () => {
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      getEmployeeByKeys,
      createEmployeePort,
      employeeFactory,
    );
    await expect(
      createEmployeeUseCase.execute(employeeEntityFixture()),
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
      createEmployeeUseCase.execute(employeeEntityFixture()),
    ).rejects.toThrow(new Error('Error'));
  });

  it('Should create employee with success', async () => {
    getEmployeeByKeys.execute.mockResolvedValue(undefined);
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      getEmployeeByKeys,
      createEmployeePort,
      employeeFactory,
    );
    await createEmployeeUseCase.execute(employeeEntityFixture());
    expect(createEmployeePort.execute).toHaveBeenCalledWith(
      employeeEntityFixture(),
    );
  });
});
