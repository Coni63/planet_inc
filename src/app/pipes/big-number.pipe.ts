import { Pipe, PipeTransform } from '@angular/core';
import { BigNumber } from 'bignumber.js'

@Pipe({
  name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {

  transform(value: BigNumber, sign: boolean = false): string {
    if (!value){
      return "";
    }
    
    const threshold = new BigNumber(1000000000);
    let s = (sign && value.isGreaterThanOrEqualTo(0)) ? "+" : "";
    if (value.isGreaterThanOrEqualTo(threshold)){
      return s + value.toExponential(2);
    } else {
      return s + value.toFormat(0);
    }
    
  }

}
