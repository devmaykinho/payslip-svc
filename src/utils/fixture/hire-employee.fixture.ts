import { HireEmployeeDto } from 'src/domain/interfaces/dtos/hire-employee.dto';

export const hireEmployeeFixture = (
  props?: Partial<HireEmployeeDto>,
): HireEmployeeDto => {
  const employeInput: HireEmployeeDto = {
    name: 'Nome',
    cpf: '854.179.260-94',
    email: 'email@email.com',
    rg: '22222222X',
    admissionDate: new Date('2022-01-01T00:00:00.000Z'),
    dismissalDate: new Date('2022-01-02T00:00:00.000Z'),
    isActive: true,
  };
  return {
    ...employeInput,
    ...props,
  };
};
