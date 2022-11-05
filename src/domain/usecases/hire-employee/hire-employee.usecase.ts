import { GetEmployeeByUniqueKeyPort } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';
import { HireEmployeePort } from 'src/domain/ports/repositories/hire-employee.port';
import { Employee } from '../../entities/employee/employee.entity';

export class HireEmployeeUseCase {
  constructor(
    private readonly employee: Employee,
    private readonly getEmployeeByKeys: GetEmployeeByUniqueKeyPort,
    private readonly createEmployee: HireEmployeePort,
  ) {}
  async execute(): Promise<void> {
    const employeeData = this.employee.get();

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
