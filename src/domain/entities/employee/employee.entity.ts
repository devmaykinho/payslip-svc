import { ValidateCpfPort } from 'src/domain/ports/validations/validate-cpf.port';
import { ValidateEmailPort } from 'src/domain/ports/validations/validate-email.port';
import { ValidateRgPort } from 'src/domain/ports/validations/validate-rg.port';

export interface EmployeeEntityInput {
  name: string;
  cpf: string;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
  isActive: boolean;
}

export class EmployeeEntity {
  constructor(
    private readonly employee: EmployeeEntityInput,
    private readonly validateEmail: ValidateEmailPort,
    private readonly validateCpf: ValidateCpfPort,
    private readonly validateRg: ValidateRgPort,
  ) {
    this.validate();
  }

  private validate() {
    if (!this.dismissalIsValid()) {
      throw new Error('Dismissal date cannot be less than the admission date');
    }
    if (!this.validateEmail.isValid(this.employee.email)) {
      throw new Error('Email is invalid');
    }
    if (!this.validateCpf.isValid(this.employee.cpf)) {
      throw new Error('Cpf is invalid');
    }
    if (!this.validateRg.isValid(this.employee.rg)) {
      throw new Error('Rg is invalid');
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
