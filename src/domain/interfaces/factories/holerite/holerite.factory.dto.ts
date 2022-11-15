import { PaymentType, Period } from '../../common/global';

export interface HoleriteFactoryDto {
  paymentDate: Date;
  period: Period;
  paymentType: PaymentType;
  file: File;
  employeeId: string;
}
