import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService){

    }
    @Get('')
    findAll(@Query() pagnationQuery){
        // const {limit , offset} = pagnationQuery;
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeeService.findOne(id);
    }

    @Post('create')
    creat(@Body() createCoffeeDto: CreateCoffeeDto){
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string , @Body() updateCofffeeDto: UpdateCoffeeDto){
       return this.coffeeService.update(id, updateCofffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.delete(id);
    }
}
