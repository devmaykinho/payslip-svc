import { Module } from '@nestjs/common';
import { HireEmployeeController } from './presentation/controllers/employee/hire-employee.controller';

@Module({
  imports: [],
  controllers: [HireEmployeeController],
  providers: [],
})
export class AppModule {}
