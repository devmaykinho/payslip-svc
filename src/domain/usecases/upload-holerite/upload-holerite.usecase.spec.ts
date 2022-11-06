import { mock } from 'jest-mock-extended';
import { FileStoragePort } from 'src/domain/interfaces/ports/file-storage.port';
import { UploadHoleriteUseCase } from './upload-holerite.usecase';

describe('UploadHoleriteUseCase - Unit test', () => {
  const fileStorage = mock<FileStoragePort>();
  beforeEach(() => {
    fileStorage.updload.mockResolvedValue('fileKey');
  });
  it('Should return an exception if upload on storage fail', () => {
    fileStorage.updload.mockImplementation(() => {
      throw new Error('Upload fail');
    });
    const file = Buffer.alloc(10);
    const uploadHoleriteUseCase = new UploadHoleriteUseCase(fileStorage);
    expect(() => uploadHoleriteUseCase.execute(file)).toThrow(
      new Error('Upload fail'),
    );
  });
});
