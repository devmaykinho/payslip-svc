import { Employee } from 'src/domain/entities/employee/employee.entity';
import { RepositoryPort } from './repository';

export type EmployeeRepository = RepositoryPort<Employee>;
