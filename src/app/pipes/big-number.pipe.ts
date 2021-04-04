import { Pipe, PipeTransform } from '@angular/core';
import { BigNumber } from 'bignumber.js'

@Pipe({
  name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {

  transform(value: BigNumber): string {
    const threshold = new BigNumber(1000000000);
    if (value.isGreaterThanOrEqualTo(threshold)){
      return value.toExponential(2);
    } else {
      return value.toFormat(2);
    }
    
  }

}
