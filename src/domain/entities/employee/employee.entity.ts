import { ValidateCpfPort } from 'src/domain/ports/validate-cpf.port';
import { ValidateEmailPort } from 'src/domain/ports/validate-email.port';
import { ValidateRgPort } from 'src/domain/ports/validate-rg.port';

export interface EmployeeInput {
  cpf: string;
  rg: string;
  email: string;
  admissionDate: Date;
  dismissalDate: Date;
}

export class EmployeeEntity {
  constructor(
    private readonly employeeInput: EmployeeInput,
    private readonly validateEmail: ValidateEmailPort,
    private readonly validateCpf: ValidateCpfPort,
    private readonly validateRg: ValidateRgPort,
  ) {
    this.validateEmployee();
  }

  private validateEmployee() {
    if (!this.dismissalIsValid()) {
      throw new Error('Dismissal date cannot be less than the admission date');
    }
    if (!this.validateEmail.isValid(this.employeeInput.email)) {
      throw new Error('Email is invalid');
    }
    if (!this.validateCpf.isValid(this.employeeInput.cpf)) {
      throw new Error('Cpf is invalid');
    }
    if (!this.validateRg.isValid(this.employeeInput.rg)) {
      throw new Error('Rg is invalid');
    }
  }

  private dismissalIsValid(): boolean {
    if (this.employeeInput.dismissalDate < this.employeeInput.admissionDate) {
      return false;
    }

    return true;
  }
}
