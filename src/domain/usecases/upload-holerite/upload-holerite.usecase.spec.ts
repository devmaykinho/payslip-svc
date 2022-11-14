import { mock } from 'jest-mock-extended';
import { HoleriteFactory } from '../../../domain/interfaces/factories/holerite/holerite.factory';
import { FileStoragePort } from '../../../domain/interfaces/ports/file-storage.port';
import { HoleriteRepository } from '../../../domain/interfaces/repositories/holerite.repository';
import { holeriteFixture } from '../../../mocks/fixture/holerite.fixture';
import { uploadHoleriteFixture } from '../../../mocks/fixture/upload-holerite.fixture';
import { UploadHoleriteUseCase } from './upload-holerite.usecase';

describe('UploadHoleriteUseCase - Unit test', () => {
  const fileStorage = mock<FileStoragePort>();
  const holeriteRepository = mock<HoleriteRepository>();
  const holeriteFactory = mock<HoleriteFactory>();
  beforeEach(() => {
    fileStorage.updload.mockResolvedValue();
    holeriteFactory.getInstance.mockReturnValue(holeriteFixture());
  });
  it('Should return an exception if upload on storage fail', async () => {
    fileStorage.updload.mockImplementation(() => {
      throw new Error('Upload fail');
    });

    const uploadHoleriteUseCase = new UploadHoleriteUseCase(
      fileStorage,
      holeriteRepository,
      holeriteFactory,
    );
    await expect(() =>
      uploadHoleriteUseCase.execute(uploadHoleriteFixture()),
    ).rejects.toThrow(new Error('Upload fail'));
  });
});
