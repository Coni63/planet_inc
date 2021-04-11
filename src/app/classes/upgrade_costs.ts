import BigNumber from 'bignumber.js';
import { ICostState } from './interfaces';

export class Cost {
    a0: BigNumber;
    b0: BigNumber;
    offset: number = 0;
    currentCost: BigNumber;
    level: number = 0;

    constructor(a0: BigNumber, b0: BigNumber = new BigNumber(1), offset: number = 0){
        this.a0 = a0;
        this.b0 = b0;
        this.offset = offset;
    }

    upgrade(){
        if (this.level < this.offset) {
            this.currentCost = new BigNumber(0);
        } else if (this.level == this.offset) {
            this.currentCost = this.a0;
        } else {
            this.currentCost = this.currentCost.multipliedBy(this.b0);
        }
        this.level++;
    }

    toJSON(): ICostState {
        return {
            currentCost: this.currentCost.toFixed(),
            level: this.level,
            a0: this.a0.toFixed(),
            b0: this.b0.toFixed(),
            offset: this.offset
        }
    }
    
    loadJSON(data: ICostState) {
        this.level = data.level;
        this.currentCost = new BigNumber(data.currentCost);
        this.a0 = new BigNumber(data.a0);
        this.b0 = new BigNumber(data.b0);
        this.offset = data.offset;
    }

}