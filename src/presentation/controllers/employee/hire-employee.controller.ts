import { Controller, Get } from '@nestjs/common';

@Controller('employee/hire')
export class HireEmployeeController {
  @Get()
  execute() {
    return 'Teste';
  }
}
