import BigNumber from 'bignumber.js';

export class Cost {
    a0: BigNumber;
    b0: BigNumber;
    currentCost: BigNumber;
    other_ressources: boolean;
    threshold: number = 10;
    level: number = 0;

    constructor(a0: BigNumber, b0: BigNumber = new BigNumber(1), other_ressources: boolean = true){
        this.a0 = a0;
        this.b0 = b0;
        this.currentCost = this.a0;
        this.other_ressources= other_ressources;
    }

    upgrade(){
        if (this.other_ressources){
            if (this.level < this.threshold) {
                this.currentCost = new BigNumber(0);
            } else if (this.level == this.threshold) {
                this.currentCost = this.a0;
            } else {
                this.currentCost = this.currentCost.multipliedBy(this.b0);
            }
        } else {
            this.currentCost = this.currentCost.multipliedBy(this.b0);
        }
        this.level++;
    }

    
}