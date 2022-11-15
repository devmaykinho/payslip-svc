import { Test } from '@nestjs/testing';
import { HireEmployeeController } from '../../../presentation/controllers/employee/hire-employee.controller';
describe('HireEmployeeController - Unit test', () => {
  let hireEmployeeController: HireEmployeeController;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HireEmployeeController],
    }).compile();

    hireEmployeeController = moduleRef.get<HireEmployeeController>(
      HireEmployeeController,
    );
  });
  it('Should return teste', async () => {
    expect(hireEmployeeController.execute()).toBe('Teste');
  });
});
