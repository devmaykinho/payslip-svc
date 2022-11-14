import { HoleriteDto } from './holerite.dto';

export class Holerite {
  constructor(private readonly holerite: HoleriteDto) {
    this.validate();
  }

  private validate() {
    if (this.holerite.period.endDate < this.holerite.period.startDate) {
      throw new Error('End period must be less than the end period');
    }
  }

  get() {
    return this.holerite;
  }
}
