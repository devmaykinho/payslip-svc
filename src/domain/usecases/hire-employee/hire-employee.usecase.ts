import { EmployeeFactory } from '../../interfaces/factories/employee/employee.factory';
import { EmployeeRepository } from '../../interfaces/repositories/employee.repository';
import { HireEmployeeDto } from './hire-employee.usecase.dto';

export class HireEmployeeUseCase {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly employeeFactory: EmployeeFactory,
  ) {}
  async execute(input: HireEmployeeDto): Promise<void> {
    const employee = this.employeeFactory.getInstance(input);
    this.employeeRepository.save(employee);
  }
}
