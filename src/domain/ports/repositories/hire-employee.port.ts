import { EmployeeDto } from 'src/domain/entities/employee/employee.dto';

export interface HireEmployeePort {
  execute: (input: EmployeeDto) => Promise<void>;
}
