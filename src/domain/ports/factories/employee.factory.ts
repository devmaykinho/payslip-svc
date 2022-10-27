import { Employee } from 'src/domain/entities/employee/employee.entity';
import { CreateEmployeeDto } from 'src/domain/usecases/employees/create-employee.dto';

export interface EmployeeFactory {
  getInstance: (input: CreateEmployeeDto) => Employee;
}
