export interface CreateEmployeeDto {
  name: string;
  cpf: string;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}
