import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import {
  CreateEmployeeInput,
  CreateEmployeePort,
} from 'src/domain/ports/repositories/create-employee.port';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';

export class CreateEmployeeUseCase {
  constructor(
    private readonly getEmployeeByKeys: GetEmployeeByUniqueKeyPort,
    private readonly createEmployee: CreateEmployeePort,
    private readonly employeeFactory: EmployeeFactory,
  ) {}
  async execute(input: CreateEmployeeInput): Promise<void> {
    const employee = this.employeeFactory.getInstance(input);
    const { cpf, rg, email } = input;
    const employeCreated = await this.getEmployeeByKeys.execute({
      cpf,
      rg,
      email,
    });
    if (employeCreated) {
      throw new Error('There is already an employee registered with this cpf');
    }
    await this.createEmployee.execute(employee.get());
  }
}
