import { Employee } from '../employee/employee.entity';

export interface Period {
  startDate: Date;
  endDate: Date;
}

export type PaymentType =
  | 'SALARIO'
  | 'ADIANTAMENTO'
  | 'FERIAS'
  | 'DECIMO_TERCEIRO'
  | 'PLR';

export interface HoleriteDto {
  paymentDate: Date;
  period: Period;
  paymentType: PaymentType;
  fileKey: string;
  employee: Employee;
}
