import { mock } from 'jest-mock-extended';
import { ValidateCpfPort } from 'src/domain/ports/validations/validate-cpf.port';
import { ValidateRgPort } from 'src/domain/ports/validations/validate-rg.port';
import { employeeEntityFixture } from '../../../utils/fixture/employee.entity.fixture';
import { ValidateEmailPort } from '../../ports/validations/validate-email.port';
import { EmployeeEntity } from './employee.entity';

describe('Employee Entity - Unit test', () => {
  const validateEmail = mock<ValidateEmailPort>();
  const validateCpf = mock<ValidateCpfPort>();
  const validateRg = mock<ValidateRgPort>();
  beforeEach(() => {
    validateEmail.isValid.mockReturnValue(true);
    validateCpf.isValid.mockReturnValue(true);
    validateRg.isValid.mockReturnValue(true);
  });
  it('Should return an exception if email is invalid', () => {
    validateEmail.isValid.mockReturnValue(false);
    expect(
      () =>
        new EmployeeEntity(
          employeeEntityFixture(),
          validateEmail,
          validateCpf,
          validateRg,
        ),
    ).toThrow('Email is invalid');
  });

  it('Should return an exception if cpf is invalid', () => {
    validateCpf.isValid.mockReturnValue(false);
    expect(
      () =>
        new EmployeeEntity(
          employeeEntityFixture(),
          validateEmail,
          validateCpf,
          validateRg,
        ),
    ).toThrow(new Error('Cpf is invalid'));
  });

  it('Should return an exception if rg is invalid', () => {
    validateRg.isValid.mockReturnValue(false);
    expect(
      () =>
        new EmployeeEntity(
          employeeEntityFixture(),
          validateEmail,
          validateCpf,
          validateRg,
        ),
    ).toThrow(new Error('Rg is invalid'));
  });

  it('Should return an exception if dismissal date less than admission date ', () => {
    expect(
      () =>
        new EmployeeEntity(
          employeeEntityFixture({
            admissionDate: new Date('01/05/2022'),
            dismissalDate: new Date('01/02/2022'),
          }),
          validateEmail,
          validateCpf,
          validateRg,
        ),
    ).toThrow(
      new Error('Dismissal date cannot be less than the admission date'),
    );
  });

  it('Should create an employee instance and return an employee', () => {
    const employee = new EmployeeEntity(
      employeeEntityFixture(),
      validateEmail,
      validateCpf,
      validateRg,
    );
    expect(employee.get()).toEqual(employeeEntityFixture());
  });
});
