import { HoleriteDto } from './holerite.dto';
import { Holerite } from './holerite.entity';

describe('Holerite Entity - Unite test', () => {
  it('Should return an exception if end period is lass than start period', () => {
    const holeriteInput: HoleriteDto = {
      paymentDate: new Date('2022-01-05T00:00:00.000Z'),
      period: {
        startDate: new Date('2022-01-31T00:00:00.000Z'),
        endDate: new Date('2022-01-01T00:00:00.000Z'),
      },
      fileUrl: 'url',
    };
    expect(() => new Holerite(holeriteInput)).toThrow(
      new Error('End period must be less than the end period'),
    );
  });
});
