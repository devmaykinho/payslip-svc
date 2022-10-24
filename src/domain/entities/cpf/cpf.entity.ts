export class CpfEntity {
  constructor(private cpf: string) {
    this.setOnlyNumericDigit();
    this.validate();
  }
  private validate() {
    this.checkLength();
    this.checkSameDigits();

    const cpfValidated = this.getValidatedCpf();
    console.log(this.cpf, cpfValidated);
    if (this.cpf !== cpfValidated) {
      throw new Error('Cpf is invalid');
    }
  }

  private setOnlyNumericDigit() {
    this.cpf = this.cpf.replace(/\D/g, '');
  }

  private checkLength() {
    if (this.cpf.length != 11) {
      throw new Error('Cpf should have 11 digits');
    }
  }

  private checkSameDigits() {
    if ([...new Set(this.cpf)].length === 1) {
      throw new Error('Cpf cannot have all digits the same');
    }
  }

  private getValidatedCpf(): string {
    const cpfWithoutDigit = this.cpf.slice(0, 9);
    const firstDigit = this.calculateDigit(cpfWithoutDigit);
    const secondDigit = this.calculateDigit(`${cpfWithoutDigit}${firstDigit}`);
    return `${cpfWithoutDigit}${firstDigit}${secondDigit}`;
  }

  private calculateDigit(cpfPartialDigits: string): number {
    let digitsToCaculate = cpfPartialDigits.length + 1;
    let total = 0;
    for (const currentCpfDigit of cpfPartialDigits) {
      total = total + Number(currentCpfDigit) * digitsToCaculate;
      digitsToCaculate--;
    }
    const rest = total % 11;

    if (rest >= 2) {
      return 11 - rest;
    }
    return 0;
  }

  public format() {
    return (
      this.cpf.slice(0, 3) +
      '.' +
      this.cpf.slice(3, 6) +
      '.' +
      this.cpf.slice(6, 9) +
      '-' +
      this.cpf.slice(9, 11)
    );
  }
}
