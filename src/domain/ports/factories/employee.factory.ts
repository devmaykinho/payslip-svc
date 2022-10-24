import {
  EmployeeEntity,
  EmployeeEntityInput,
} from 'src/domain/entities/employee/employee.entity';

export interface EmployeeFactory {
  getInstance: (input: EmployeeEntityInput) => EmployeeEntity;
}
