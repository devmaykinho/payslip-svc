import { Injectable } from '@nestjs/common';
import { HireEmployeeUseCase } from 'src/domain/usecases/hire-employee/hire-employee.usecase';
import { EmployeeRepositoryPg } from 'src/infra/database/postgres/repositories/employee.repository';
import { EmployeeEntityFactory } from '../entities/employee.entity.factory';

@Injectable()
export class HireEmployeeFactory {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryPg,
    private readonly employeeFactory: EmployeeEntityFactory,
  ) {}
  getInstance(): HireEmployeeUseCase {
    return new HireEmployeeUseCase(
      this.employeeRepository,
      this.employeeFactory,
    );
  }
}
