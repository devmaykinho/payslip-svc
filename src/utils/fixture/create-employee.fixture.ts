import { EmployeeCreated } from 'src/domain/ports/repositories/get-employee-by-unique-key.port';

export const createEmployeeFixture = (
  props?: Partial<EmployeeCreated>,
): EmployeeCreated => {
  const employeInput: EmployeeCreated = {
    id: 1,
    name: 'Nome',
    cpf: '111.111.111-11',
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
