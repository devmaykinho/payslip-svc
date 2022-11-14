import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeRepository } from 'src/domain/interfaces/repositories/employee.repository';
import { EmployeeMapper } from '../mappers/employee.mapper';
import { EmployeeModel } from '../models/employee.model';

export class EmployeeRepositoryPg implements EmployeeRepository {
  constructor(private readonly employeeMapper: EmployeeMapper) {}
  async getById(id: string) {
    const employeeModel: EmployeeModel = {} as EmployeeModel;
    return this.employeeMapper.converterToDomain(employeeModel);
  }

  async getAll() {
    return [];
  }

  async delete(id: string) {
    Promise.resolve(undefined);
  }

  async update(entity: Employee) {
    Promise.resolve(undefined);
  }

  async save(entity: Employee) {
    Promise.resolve(undefined);
  }
}
