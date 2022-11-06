import { EmployeeFactory } from 'src/domain/interfaces/factories/employee.factory';
import { HireEmployeeDto } from '../../interfaces/dtos/hire-employee.dto';
import { EmployeeRepository } from '../../interfaces/repositories/employee.repository';

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
