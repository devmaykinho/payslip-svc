import { Employee } from '../../../entities/employee/employee.entity';
import { EmployeeFactoryDto } from './employee.factory.dto';

export interface EmployeeFactory {
  getInstance: (input: EmployeeFactoryDto) => Employee;
}
