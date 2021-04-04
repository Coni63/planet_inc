import { Item } from './item';
import { BigNumber } from 'bignumber.js';

export class Planet {
    name: string;
    production: Item;
    storage: Item[];
    color: string;

    constructor(name: string, items: Item[], idx_production: number, color: string){
        this.name = name;
        this.production = items[idx_production];
        this.color = color;
        this.storage = items;
    }


}