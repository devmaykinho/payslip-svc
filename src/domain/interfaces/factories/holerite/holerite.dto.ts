import { PaymentType, Period } from 'src/domain/entities/holerite/holerite.dto';

export interface HoleriteDto {
  paymentDate: Date;
  period: Period;
  paymentType: PaymentType;
  file: File;
  employeeId: string;
}
