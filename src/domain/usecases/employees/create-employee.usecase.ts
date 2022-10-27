import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import { CreateEmployeePort } from 'src/domain/ports/repositories/create-employee.port';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';
import { CreateEmployeeDto } from './create-employee.dto';

export class CreateEmployeeUseCase {
  constructor(
    private readonly getEmployeeByKeys: GetEmployeeByUniqueKeyPort,
    private readonly createEmployee: CreateEmployeePort,
    private readonly employeeFactory: EmployeeFactory,
  ) {}
  async execute(input: CreateEmployeeDto): Promise<void> {
    const employee = this.employeeFactory.getInstance(input);
    const employeeData = employee.get();

    const employeCreated = await this.getEmployeeByKeys.execute({
      cpf: employeeData.cpf.get(),
      rg: employeeData.rg,
      email: employeeData.email,
    });
    if (employeCreated) {
      throw new Error('There is already an employee registered with this cpf');
    }
    await this.createEmployee.execute(employeeData);
  }
}
