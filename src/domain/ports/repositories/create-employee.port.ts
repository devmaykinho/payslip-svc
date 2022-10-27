import { EmployeeDto } from 'src/domain/entities/employee/employee.dto';

export interface CreateEmployeePort {
  execute: (input: EmployeeDto) => Promise<void>;
}
