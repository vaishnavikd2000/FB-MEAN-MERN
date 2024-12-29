import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarePipe'
})
export class SquarePipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    if(!value){
      return value
    }
    return value * value;
  }

}
