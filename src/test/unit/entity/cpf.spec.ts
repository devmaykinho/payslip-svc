import { Cpf } from '../../../domain/entities/cpf/cpf.entity';

describe('CPF Entity - Unit test', () => {
  it('Should return an exception if cpf lenth is less then 11', () => {
    expect(() => new Cpf('123.4562.78')).toThrow(
      new Error('Cpf should have 11 digits'),
    );
  });

  it('Should return an exception if cpf lenth is more then 11', () => {
    expect(() => new Cpf('123.456.2222.78')).toThrow(
      new Error('Cpf should have 11 digits'),
    );
  });

  it('Should return an exception if all digits are the same', () => {
    expect(() => new Cpf('11111111111')).toThrow(
      new Error('Cpf cannot have all digits the same'),
    );
  });

  it('Should return an exception if cpf is invalid', () => {
    expect(() => new Cpf('11122277700')).toThrow(new Error('Cpf is invalid'));
  });

  it('Should return an exception if cpf is invalid', () => {
    expect(() => new Cpf('11122277700')).toThrow(new Error('Cpf is invalid'));
  });

  it('Should return a cpf formated', () => {
    const cpfWithoutFormat = '85417926094';
    const cpfFormated = '854.179.260-94';
    const cpf = new Cpf(cpfWithoutFormat);
    expect(cpf.format()).toBe(cpfFormated);
  });
});
