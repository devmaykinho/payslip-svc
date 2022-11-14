import { Employee } from '../../entities/employee/employee.entity';
import { RepositoryPort } from './repository';

export type EmployeeRepository = RepositoryPort<Employee>;
