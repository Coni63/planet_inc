import { BigNumber } from 'bignumber.js';
import { Fleet } from './fleet';
import { Cost } from './upgrade_costs';

export class Planet {
    id: number;
    name: string;
    production: { [key : string] : BigNumber };
    consumption: { [key : string] : BigNumber };
    storage: { [key : string] : BigNumber };
    maxStorage: BigNumber;
    color: string;
    discovered: boolean;
    next: Planet;
    fleet: Fleet;

    cost_production: {[key: string] : Cost};
    cost_storage: {[key: string] : Cost};
    cost_units: {[key: string] : Cost};
    cost_speed: {[key: string] : Cost};
    cost_acceleration: {[key: string] : Cost};
    cost_volume: {[key: string] : Cost};
    cost_discovery: {[key: string] : Cost};

    constructor(name: string, id: number, color: string){
        this.id = id;
        this.name = name;
        this.color = color;
        this.production = {};
        this.consumption = {};
        this.storage = {};
        this.maxStorage = new BigNumber(32);
        this.discovered = false;
        this.fleet = new Fleet(this);
    }

    increment(){
        if (this.can_increment()) {
            Object.keys(this.production).forEach(key => {
                let next_value = this.storage[key].plus(this.production[key]);
                this.storage[key] = next_value.isGreaterThanOrEqualTo(this.maxStorage) ? this.maxStorage : next_value;
            });

            Object.keys(this.consumption).forEach(key => {
                this.storage[key] = this.storage[key].minus(this.consumption[key]);
            });
        }
    }

    can_increment(): boolean{
        if (this.isEmptyObject(this.consumption)){
            return true;
        }

        let ans = true;
        Object.keys(this.consumption).forEach(key => {
            if (this.storage[key].isLessThan(this.consumption[key])){
                ans = false;
            }
        });
        return ans;
    }

    can_upgrade(related_cost){
        for (let key of Object.keys(related_cost)) {
            if (this.storage[key].isLessThan(related_cost[key].currentCost)){
                return false;
            }
        }
        return true;
    }

    upgrade_production(){
        if (this.can_upgrade(this.cost_production)){
            Object.keys(this.production).forEach(key => {
                this.production[key] = this.production[key].multipliedBy(2);
            });
            this.pay(this.cost_production);
        }
    }

    upgrade_storage(){
        if (this.can_upgrade(this.cost_storage)){
            this.maxStorage = this.maxStorage.multipliedBy(2);
            this.pay(this.cost_storage);
        }
    }

    upgrade_units(){
        if (this.can_upgrade(this.cost_units)){
            this.fleet.upgrade_units();
            this.pay(this.cost_units);
        }
    }

    upgrade_speed(){
        if (this.can_upgrade(this.cost_speed)){
            this.fleet.upgrade_speed();
            this.pay(this.cost_speed);
        }
    }

    upgrade_acceleration(){
        if (this.can_upgrade(this.cost_acceleration)){
            this.fleet.upgrade_acceleration();
            this.pay(this.cost_acceleration);
        }
    }

    upgrade_volume(){
        if (this.can_upgrade(this.cost_volume)){
            this.fleet.upgrade_volume();
            this.pay(this.cost_volume);
        }
    }

    pay(cost: {[key: string] : Cost}){
        Object.keys(cost).forEach(key => {
            this.storage[key] = this.storage[key].minus(cost[key].currentCost);
            cost[key].upgrade();
        });
    }

    isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }

}