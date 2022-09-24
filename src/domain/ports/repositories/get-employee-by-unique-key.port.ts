export interface EmployeeCreated {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}

export interface GetEmployeeByUniqueKeyFilter {
  cpf: string;
  rg: string;
  email: string;
}
export interface GetEmployeeByUniqueKeyPort {
  execute: (filter: GetEmployeeByUniqueKeyFilter) => Promise<EmployeeCreated>;
}
