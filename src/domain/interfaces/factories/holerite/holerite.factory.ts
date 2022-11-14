import { Holerite } from 'src/domain/entities/holerite/holerite.entity';
import { HoleriteDto } from './holerite.dto';

export interface HoleriteFactory {
  getInstance: (input: HoleriteDto) => Holerite;
}
