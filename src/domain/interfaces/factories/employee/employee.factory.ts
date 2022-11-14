import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeDto } from './employee.dto';

export interface EmployeeFactory {
  getInstance: (input: EmployeeDto) => Employee;
}
