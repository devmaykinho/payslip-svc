import { Employee } from '../../../domain/entities/employee/employee.entity';
import { employeeFixture } from '../../mocks/fixture/employee.fixture';

describe('Employee Entity - Unit test', () => {
  it('Should return an exception if dismissal date less than admission date ', () => {
    expect(
      () =>
        new Employee(
          employeeFixture({
            admissionDate: new Date('01/05/2022'),
            dismissalDate: new Date('01/02/2022'),
          }),
        ),
    ).toThrow(
      new Error('Dismissal date cannot be less than the admission date'),
    );
  });

  it('Should create an employee instance and return an employee', () => {
    const employee = new Employee(employeeFixture());
    expect(employee.get()).toEqual(employeeFixture());
  });
});
