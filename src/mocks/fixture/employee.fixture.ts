import { Cpf } from '../../domain/entities/cpf/cpf.entity';
import { EmployeeDto } from '../../domain/entities/employee/employee.dto';

export const employeeFixture = (props?: Partial<EmployeeDto>): EmployeeDto => {
  const employeInput: EmployeeDto = {
    name: 'Nome',
    cpf: new Cpf('854.179.260-94'),
    email: 'email@email.com',
    rg: '22222222X',
    admissionDate: new Date('01/01/2022'),
    dismissalDate: new Date('02/02/2022'),
    isActive: true,
  };
  return {
    ...employeInput,
    ...props,
  };
};
