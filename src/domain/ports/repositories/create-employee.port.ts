export interface CreateEmployeeInput {
  name: string;
  cpf: string;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}

export interface CreateEmployeePort {
  execute: (input: CreateEmployeeInput) => Promise<void>;
}
