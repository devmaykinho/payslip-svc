import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeFactory } from '../../../../domain/interfaces/factories/employee/employee.factory';
import { EmployeeModel } from '../models/employee.model';

export class EmployeeMapper {
  constructor(private readonly employeeFactory: EmployeeFactory) {}

  converterToDomain(employeeModel: EmployeeModel): Employee {
    return this.employeeFactory.getInstance({
      name: employeeModel.name,
      cpf: employeeModel.cpf,
      rg: employeeModel.rg,
      email: employeeModel.email,
      admissionDate: employeeModel.admissionDate,
      dismissalDate: employeeModel.dismissalDate,
      isActive: employeeModel.isActive,
    });
  }

  converterToModel(employee: Employee): EmployeeModel {
    const employeeModel = employee.get();
    return {
      name: employeeModel.name,
      cpf: employeeModel.cpf.get(),
      rg: employeeModel.rg,
      email: employeeModel.email,
      admissionDate: employeeModel.admissionDate,
      dismissalDate: employeeModel.dismissalDate,
      isActive: employeeModel.isActive,
    };
  }
}
