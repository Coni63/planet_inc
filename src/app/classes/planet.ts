import { Item } from './item';
import { BigNumber } from 'bignumber.js';
import { Fleet } from './fleet';

export class Planet {
    id: number;
    name: string;
    production: Item;
    storage: Item[];
    color: string;
    discovered: boolean;
    fleet: Fleet;

    constructor(name: string, items: Item[], idx_production: number, color: string){
        this.id = idx_production;
        this.name = name;
        this.production = items[idx_production];
        this.color = color;
        this.storage = items;
        this.discovered = false;
        this.fleet = new Fleet(this.id);
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

    upgrade_units(){
        this.fleet.upgrade_units();
    }

    upgrade_speed(){
        this.fleet.upgrade_speed();
    }

    upgrade_acceleration(){
        this.fleet.upgrade_acceleration();
    }

    upgrade_volume(){
        this.fleet.upgrade_volume();
    }

}