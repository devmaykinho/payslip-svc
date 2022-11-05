import { EmployeeFactory } from 'src/domain/ports/factories/employee.factory';
import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';
import { HireEmployeePort } from 'src/domain/ports/repositories/hire-employee.port';
import { HireEmployeeDto } from './hire-employee.dto';

export class HireEmployeeUseCase {
  constructor(
    private readonly getEmployeeByKeys: GetEmployeeByUniqueKeyPort,
    private readonly createEmployee: HireEmployeePort,
    private readonly employeeFactory: EmployeeFactory,
  ) {}
  async execute(input: HireEmployeeDto): Promise<void> {
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
