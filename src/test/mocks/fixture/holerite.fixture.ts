import { Employee } from '../../../../src/domain/entities/employee/employee.entity';
import { HoleriteDto } from '../../../../src/domain/entities/holerite/holerite.dto';
import { Holerite } from '../../../../src/domain/entities/holerite/holerite.entity';
import { employeeFixture } from './employee.fixture';

export const holeriteFixture = (props?: Partial<HoleriteDto>): Holerite => {
  const employeInput: HoleriteDto = {
    fileKey: 'file.pdf',
    paymentDate: new Date('2022-02-05T00:00:00.000Z'),
    paymentType: 'SALARIO',
    period: {
      startDate: new Date('2022-01-01T00:00:00.000Z'),
      endDate: new Date('2022-01-31T00:00:00.000Z'),
    },
    employee: new Employee(employeeFixture()),
  };
  const employeeDto = {
    ...employeInput,
    ...props,
  };
  return new Holerite(employeeDto);
};
