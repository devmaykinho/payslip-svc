import { PaymentType, Period } from 'src/domain/interfaces/common/global';
import { Employee } from '../employee/employee.entity';

export interface HoleriteDto {
  paymentDate: Date;
  period: Period;
  paymentType: PaymentType;
  fileKey: string;
  employee: Employee;
}
