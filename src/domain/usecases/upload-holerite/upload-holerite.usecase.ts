import { Employee } from '../../entities/employee/employee.entity';
import { HoleriteFactory } from '../../interfaces/factories/holerite/holerite.factory';
import { FileStoragePort } from '../../interfaces/ports/file-storage.port';
import { HoleriteRepository } from '../../interfaces/repositories/holerite.repository';
import { UploadHoleriteDto } from './upload-holerite.usecase.dto';

export class UploadHoleriteUseCase {
  constructor(
    private readonly fileStorage: FileStoragePort,
    private readonly holeriteRepository: HoleriteRepository,
    private readonly holeriteFactory: HoleriteFactory,
  ) {}
  async execute(input: UploadHoleriteDto) {
    const holerite = this.holeriteFactory.getInstance(input);
    const fileKey = this.generateFileKey(input, holerite.get().employee);
    await this.fileStorage.updload({ file: input.file, fileKey });
    if (fileKey) {
      try {
        await this.holeriteRepository.save(holerite);
      } catch (error) {
        this.fileStorage.remove(fileKey);
        throw new Error('Upload holerite error');
      }
    }
  }

  private generateFileKey(
    holeriteInput: UploadHoleriteDto,
    employee: Employee,
  ): string {
    const employeeCpf = employee.get().cpf.get();
    const paymentMonth = holeriteInput.paymentDate.getMonth();
    const createdDate = new Date().getTime();
    return `${paymentMonth}/${employeeCpf}/${holeriteInput.paymentType}-${createdDate}`;
  }
}
