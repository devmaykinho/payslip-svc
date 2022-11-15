import { Injectable } from '@nestjs/common';
import { Cpf } from 'src/domain/entities/cpf/cpf.entity';
import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeFactory } from 'src/domain/interfaces/factories/employee/employee.factory';
import { EmployeeFactoryDto } from 'src/domain/interfaces/factories/employee/employee.factory.dto';

@Injectable()
export class CreateEmployeeEntityFactory implements EmployeeFactory {
  getInstance(input: EmployeeFactoryDto): Employee {
    const cpf = new Cpf(input.cpf);
    return new Employee({ ...input, cpf: cpf });
  }
}
