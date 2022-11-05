import { Employee } from '../employee/employee.entity';

interface Period {
  startDate: Date;
  endDate: Date;
}

export interface HoleriteDto {
  paymentDate: Date;
  period: Period;
  fileUrl: string;
  employee: Employee;
}
