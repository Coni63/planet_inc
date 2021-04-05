import { BigNumber } from 'bignumber.js';
import { Fleet } from './fleet';

export class Planet {
    id: number;
    name: string;
    production: { [key : string] : BigNumber };
    storage: { [key : string] : BigNumber };
    maxStorage: BigNumber;
    color: string;
    discovered: boolean;
    next: Planet;
    fleet: Fleet;
    production_level: number;
    storage_level: number;

    constructor(name: string, id: number, color: string){
        this.id = id;
        this.name = name;
        this.production = {};
        this.color = color;
        this.storage = {};
        this.maxStorage = new BigNumber(32);
        this.discovered = false;
        this.fleet = new Fleet(this.id);
    }

    increment(){
        Object.keys(this.production).forEach(key => {
            let next_value = this.storage[key].plus(this.production[key]);
            this.storage[key] = next_value.isGreaterThanOrEqualTo(this.maxStorage) ? this.maxStorage : next_value;
        });
    }

    upgrade_production(){
        Object.keys(this.production).forEach(key => {
            this.production[key] = this.production[key].multipliedBy(2);
        });
        this.production_level++;
    }

    upgrade_storage(){
        this.maxStorage = this.maxStorage.multipliedBy(2);
        this.storage_level++;
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