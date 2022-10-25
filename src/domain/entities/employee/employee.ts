import { Cpf } from '../cpf/cpf';

export interface EmployeeEntityInput {
  name: string;
  cpf: Cpf;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}

export class Employee {
  constructor(private readonly employee: EmployeeEntityInput) {
    this.validate();
  }

  private validate() {
    if (!this.dismissalIsValid()) {
      throw new Error('Dismissal date cannot be less than the admission date');
    }
  }

  private dismissalIsValid(): boolean {
    if (this.employee.dismissalDate < this.employee.admissionDate) {
      return false;
    }

    return true;
  }

  public get() {
    return this.employee;
  }
}
