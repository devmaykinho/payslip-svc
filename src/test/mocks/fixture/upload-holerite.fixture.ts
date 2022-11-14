import { Blob } from 'buffer';
import { UploadHoleriteDto } from '../../../../src/domain/usecases/upload-holerite/upload-holerite.usecase.dto';

export const uploadHoleriteFixture = (
  props?: Partial<UploadHoleriteDto>,
): UploadHoleriteDto => {
  const blob = new Blob([''], { type: 'pdf' });
  blob['lastModifiedDate'] = '';
  blob['name'] = 'filename';
  const file = <File>blob;

  const uploadHoleriteInput: UploadHoleriteDto = {
    file,
    employeeId: '2',
    paymentDate: new Date('2022-02-05T00:00:00.000Z'),
    paymentType: 'SALARIO',
    period: {
      startDate: new Date('2022-01-01T00:00:00.000Z'),
      endDate: new Date('2022-01-31T00:00:00.000Z'),
    },
  };
  return {
    ...uploadHoleriteInput,
    ...props,
  };
};
