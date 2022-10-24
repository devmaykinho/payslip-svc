import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import { CreateEmployeePort } from 'src/domain/ports/repositories/create-employee.port';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';

export interface EmployeeUseCaseInput {
  name: string;
  cpf: string;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}

export class CreateEmployeeUseCase {
  constructor(
    private readonly getEmployeeByKeys: GetEmployeeByUniqueKeyPort,
    private readonly createEmployee: CreateEmployeePort,
    private readonly employeeFactory: EmployeeFactory,
  ) {}
  async execute(input: EmployeeUseCaseInput): Promise<void> {
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
