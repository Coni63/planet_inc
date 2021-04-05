import { Item } from './item';
import { BigNumber } from 'bignumber.js';

export class Planet {
    id: number;
    name: string;
    production: Item;
    storage: Item[];
    color: string;
    discovered: boolean;

    constructor(name: string, items: Item[], idx_production: number, color: string){
        this.id = idx_production;
        this.name = name;
        this.production = items[idx_production];
        this.color = color;
        this.storage = items;
        this.discovered = false;
    }

    increment(){
        this.production.increment();
    }

    upgrade_production(){
        this.production.upgrade_production();
    }

    upgrade_storage(){
        this.storage.forEach(item => item.upgrade_storage());
    }

    upgrade_speed(){
        console.log("upgrade_speed");
    }

    upgrade_acceleration(){
        console.log("upgrade_acceleration");
    }

    upgrade_volume(){
        console.log("upgrade_volume");
    }

}