import { Holerite } from '../../../entities/holerite/holerite.entity';
import { HoleriteFactoryDto } from './holerite.factory.dto';

export interface HoleriteFactory {
  getInstance: (input: HoleriteFactoryDto) => Holerite;
}
