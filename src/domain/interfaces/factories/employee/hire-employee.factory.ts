import { HireEmployeeUseCase } from 'src/domain/usecases/hire-employee/hire-employee.usecase';

export interface IHireEmployeeFactory {
  getIntance: () => HireEmployeeUseCase;
}
