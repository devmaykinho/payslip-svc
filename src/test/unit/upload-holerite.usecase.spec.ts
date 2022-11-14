import { mock } from 'jest-mock-extended';
import { HoleriteFactory } from '../../../src/domain/interfaces/factories/holerite/holerite.factory';
import { FileStoragePort } from '../../../src/domain/interfaces/ports/file-storage.port';
import { HoleriteRepository } from '../../../src/domain/interfaces/repositories/holerite.repository';
import { UploadHoleriteUseCase } from '../../../src/domain/usecases/upload-holerite/upload-holerite.usecase';
import { holeriteFixture } from '../mocks/fixture/holerite.fixture';
import { uploadHoleriteFixture } from '../mocks/fixture/upload-holerite.fixture';

describe('UploadHoleriteUseCase - Unit test', () => {
  const fileStorage = mock<FileStoragePort>();
  const holeriteRepository = mock<HoleriteRepository>();
  const holeriteFactory = mock<HoleriteFactory>();
  let uploadHoleriteUseCase: UploadHoleriteUseCase;
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    fileStorage.updload.mockResolvedValue();
    holeriteFactory.getInstance.mockReturnValue(holeriteFixture());
    uploadHoleriteUseCase = new UploadHoleriteUseCase(
      fileStorage,
      holeriteRepository,
      holeriteFactory,
    );
  });

  it('Should return an exception if holerite factory fail', async () => {
    holeriteFactory.getInstance.mockImplementation(() => {
      throw new Error('Error');
    });

    await expect(() =>
      uploadHoleriteUseCase.execute(uploadHoleriteFixture()),
    ).rejects.toThrow(new Error('Error'));
  });

  it('Should return an exception if upload on storage fail', async () => {
    fileStorage.updload.mockImplementation(() => {
      throw new Error('Upload fail');
    });

    await expect(() =>
      uploadHoleriteUseCase.execute(uploadHoleriteFixture()),
    ).rejects.toThrow(new Error('Upload fail'));
  });

  it('Should remove file if save holerite repository fail', async () => {
    const holerite = holeriteFixture().get();
    const fileKey = `${holerite.paymentDate.getMonth()}/${holerite.employee
      .get()
      .cpf.get()}/${holerite.paymentType}`;
    holeriteRepository.save.mockImplementation(() => {
      throw new Error('Error');
    });

    await expect(() =>
      uploadHoleriteUseCase.execute(uploadHoleriteFixture()),
    ).rejects.toThrow(new Error('Upload holerite error'));

    expect(fileStorage.remove).toBeCalledTimes(1);
    expect(fileStorage.remove).toHaveBeenCalledWith(fileKey);
  });

  it('Should return undefined if holerite is uploaded', async () => {
    const result = await uploadHoleriteUseCase.execute(uploadHoleriteFixture());
    expect(result).toBe(undefined);
  });
});
