import { Injectable } from '@nestjs/common';
import { Cpf } from 'src/domain/entities/cpf/cpf.entity';
import { Employee } from 'src/domain/entities/employee/employee.entity';
import { EmployeeDto } from 'src/domain/interfaces/factories/employee/employee.dto';
import { EmployeeFactory } from 'src/domain/interfaces/factories/employee/employee.factory';

@Injectable()
export class EmployeeEntityFactory implements EmployeeFactory {
  getInstance(input: EmployeeDto): Employee {
    const cpf = new Cpf(input.cpf);
    return new Employee({ ...input, cpf: cpf });
  }
}
