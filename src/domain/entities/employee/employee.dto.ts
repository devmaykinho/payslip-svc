import { Cpf } from '../cpf/cpf.entity';

export interface EmployeeDto {
  name: string;
  cpf: Cpf;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}
