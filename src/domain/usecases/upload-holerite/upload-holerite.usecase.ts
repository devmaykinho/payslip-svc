import { FileStoragePort } from 'src/domain/interfaces/ports/file-storage.port';

export class UploadHoleriteUseCase {
  constructor(private readonly fileStorage: FileStoragePort) {}
  execute(file: Buffer) {
    return this.fileStorage.updload(file);
  }
}
