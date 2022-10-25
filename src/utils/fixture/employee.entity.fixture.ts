import { Cpf } from '../../domain/entities/cpf/cpf';
import { EmployeeEntityInput } from '../../domain/entities/employee/employee';

export const employeeEntityFixture = (
  props?: Partial<EmployeeEntityInput>,
): EmployeeEntityInput => {
  const employeInput: EmployeeEntityInput = {
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
