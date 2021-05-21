import {PartialType} from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';
/**
 Role: Partial types imported from @nestjs/mapped-types package provide us with access to all properties in
 CreateCoffeeDto and are used as optional
*/
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
