import { Employee } from 'src/domain/entities/employee/employee.entity';
import { HireEmployeeDto } from 'src/domain/interfaces/dtos/hire-employee.dto';

export interface EmployeeFactory {
  getInstance: (input: HireEmployeeDto) => Employee;
}
