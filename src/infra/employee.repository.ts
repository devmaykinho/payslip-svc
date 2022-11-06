import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeRepository } from 'src/domain/interfaces/repositories/employee.repository';

export class EmployeeRepositoryPg implements EmployeeRepository {
  async getById(id: string) {
    return {} as Employee;
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
