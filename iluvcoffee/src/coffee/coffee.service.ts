import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
 private coffees:Coffee[] = [
     {
         id:1,
         name: 'Shipwreck Roast',
         brand:'Buddy Brew',
         flavors: ['chocollate','vanilla']
     }
 ]

 findAll(){
     return this.coffees;
 }
 findOne(id:string){
     return this.coffees.find(item => item.id === +id);
 }

 create(createCoffeeDto: any){
     this.coffees.push(createCoffeeDto);
 }

 update(id: string, updateCoffeeDto: any){
     const existingCoffee = this.findOne(id);
     if(existingCoffee){
         //update
     }
 }

 delete(id:string){
     const cofffeeIndex = this.coffees.findIndex(item => item.id === +id);
     if(cofffeeIndex >= 0){
         this.coffees.splice(cofffeeIndex,1);
     }
 }
}
