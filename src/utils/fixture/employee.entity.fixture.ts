import { EmployeeInput } from 'src/domain/entities/employee/employee.entity';

export const employeeEntityFixture = (
  props?: Partial<EmployeeInput>,
): EmployeeInput => {
  const employeInput: EmployeeInput = {
    cpf: '111.111.111-11',
    email: 'email@email.com',
    rg: '22222222X',
    admissionDate: new Date('01/01/2022'),
    dismissalDate: new Date('02/02/2022'),
  };
  return {
    ...employeInput,
    ...props,
  };
};
