import { EmployeeDto } from './employee.dto';

export class Employee {
  constructor(private readonly employee: EmployeeDto) {
    this.validate();
  }

  private validate() {
    this.dismissalIsValid();
  }

  private dismissalIsValid(): void {
    if (
      this.employee.dismissalDate &&
      this.employee.dismissalDate < this.employee.admissionDate
    ) {
      throw new Error('Dismissal date cannot be less than the admission date');
    }
  }

  public get() {
    return this.employee;
  }
}
