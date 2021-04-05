import BigNumber from 'bignumber.js';

export class Item {
    name: string;
    count: BigNumber;
    production: BigNumber;
    stored: BigNumber;
    maxStorage: BigNumber;
    production_level: number;
    storage_level: number;

    constructor(name: string){
        this.name = name;
        this.count = new BigNumber(0);
        this.production = new BigNumber(1);
        this.stored = new BigNumber(0);
        this.maxStorage = new BigNumber(32);
        this.production_level = 1;
        this.storage_level = 1;
    }

    increment(){
        const next_value = this.stored.plus(this.production);
        this.stored = next_value.isGreaterThanOrEqualTo(this.maxStorage) ? this.maxStorage : next_value;
    }

    deepcopy() : Item {
        const newItem = new Item(this.name);
        newItem.count = new BigNumber(this.count);
        newItem.production = new BigNumber(this.production);
        newItem.stored = new BigNumber(this.stored);
        newItem.maxStorage = new BigNumber(this.maxStorage);
        newItem.production_level = this.production_level;
        newItem.storage_level = this.storage_level;
        return newItem;
    }

    upgrade_production(){
        this.production = this.production.multipliedBy(2);
        this.production_level++;
    }

    upgrade_storage(){
        this.maxStorage = this.maxStorage.multipliedBy(2);
        this.storage_level++;
    }

}