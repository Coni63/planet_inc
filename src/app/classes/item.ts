import BigNumber from 'bignumber.js';

export class Item {
    name: string;
    count: BigNumber;
    production: BigNumber;
    stored: BigNumber;
    maxStorage: BigNumber;

    constructor(name: string){
        this.name = name;
        this.count = new BigNumber(0);
        this.production = new BigNumber(0);
        this.stored = new BigNumber(0);
        this.maxStorage = new BigNumber(0);
    }

    deepcopy() : Item {
        const newItem = new Item(this.name);
        newItem.count = new BigNumber(this.count);
        newItem.production = new BigNumber(this.production);
        newItem.stored = new BigNumber(this.stored);
        newItem.maxStorage = new BigNumber(this.maxStorage);
        return newItem;
    }

}