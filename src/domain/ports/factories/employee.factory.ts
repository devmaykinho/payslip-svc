import {
  EmployeeEntity,
  EmployeeInput,
} from 'src/domain/entities/employee/employee.entity';

export interface EmployeeFactory {
  getInstance: (input: EmployeeInput) => EmployeeEntity;
}
