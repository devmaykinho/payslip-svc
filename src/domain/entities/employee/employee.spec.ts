import { employeeEntityFixture } from '../../../utils/fixture/employee.entity.fixture';
import { Employee } from './employee';

describe('Employee Entity - Unit test', () => {
  it('Should return an exception if dismissal date less than admission date ', () => {
    expect(
      () =>
        new Employee(
          employeeEntityFixture({
            admissionDate: new Date('01/05/2022'),
            dismissalDate: new Date('01/02/2022'),
          }),
        ),
    ).toThrow(
      new Error('Dismissal date cannot be less than the admission date'),
    );
  });

  it('Should create an employee instance and return an employee', () => {
    const employee = new Employee(employeeEntityFixture());
    expect(employee.get()).toEqual(employeeEntityFixture());
  });
});
