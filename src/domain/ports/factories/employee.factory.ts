import { Employee } from 'src/domain/entities/employee/employee.entity';
import { HireEmployeeDto } from 'src/domain/usecases/hire-employee/hire-employee.dto';

export interface EmployeeFactory {
  getInstance: (input: HireEmployeeDto) => Employee;
}
