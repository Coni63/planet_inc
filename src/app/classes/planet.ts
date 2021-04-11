import { BigNumber } from 'bignumber.js';
import { Fleet } from './fleet';
import { Cost } from './upgrade_costs';
import { IPlanetState, ICostState } from './interfaces';

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

        this.cost_production= {};
        this.cost_storage= {};
        this.cost_units= {};
        this.cost_speed= {};
        this.cost_acceleration= {};
        this.cost_volume= {};
        this.cost_discovery= {};
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
        if (!related_cost || this.isEmptyObject(related_cost)){
            return false;
        }

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

    loadJSON(data: IPlanetState){
        this.production = this.deserializeProd(data.production);
        this.consumption = this.deserializeProd(data.consumption);
        this.storage = this.deserializeProd(data.storage);
        this.maxStorage = new BigNumber(data.maxStorage);
        this.discovered = data.discovered;
        this.fleet.loadJSON(data.fleet);
        this.cost_production = this.deserializeCost(data.cost_production);
        this.cost_storage = this.deserializeCost(data.cost_storage);
        this.cost_units = this.deserializeCost(data.cost_units);
        this.cost_speed = this.deserializeCost(data.cost_speed);
        this.cost_acceleration = this.deserializeCost(data.cost_acceleration);
        this.cost_volume = this.deserializeCost(data.cost_volume);
        this.cost_discovery = this.deserializeCost(data.cost_discovery);
    }

    toJSON(): IPlanetState {
        return {
            id: this.id,
            production: this.serializeProd(this.production),
            consumption: this.serializeProd(this.consumption),
            storage: this.serializeProd(this.storage),
            maxStorage: this.maxStorage.toFixed(),
            discovered: this.discovered,
            fleet: this.fleet.toJSON(),
            cost_production: this.serializeCost(this.cost_production),  // number will be the level
            cost_storage: this.serializeCost(this.cost_production),
            cost_units: this.serializeCost(this.cost_units),
            cost_speed: this.serializeCost(this.cost_speed),
            cost_acceleration: this.serializeCost(this.cost_acceleration),
            cost_volume: this.serializeCost(this.cost_volume),
            cost_discovery: this.serializeCost(this.cost_discovery)
        };
    }

    private serializeCost(obj: {[key: string] : Cost}): {[key: string] : ICostState} {
        let ans: {[key: string] : ICostState} = {};
        Object.keys(obj).forEach(key => {
            ans[key] = obj[key].toJSON();
        });
        return ans;
    }

    private deserializeCost(obj: {[key: string] : ICostState}): {[key: string] : Cost} {
        let ans: {[key: string] : Cost} = {};
        Object.keys(obj).forEach(key => {
            ans[key] = new Cost(new BigNumber(1));
            ans[key].loadJSON(obj[key]);
        });
        return ans;
    }

    private serializeProd(obj: {[key: string] : BigNumber}): {[key: string] : string} {
        let ans: {[key: string] : string} = {};
        Object.keys(obj).forEach(key => {
            ans[key] = obj[key].toFixed();
        });
        return ans;
    }

    private deserializeProd(obj: {[key: string] : string}): {[key: string] : BigNumber} {
        let ans: {[key: string] : BigNumber} = {};
        Object.keys(obj).forEach(key => {
            ans[key] = new BigNumber(obj[key]);
        });
        return ans;
    }

    /* only for the blachole */
    incrementBlackhole(factor: BigNumber){
        this.maxStorage = this.maxStorage.multipliedBy(factor);
    }

    isOver(){
        let ans = true;
        Object.keys(this.storage).forEach(key => {
            if (this.storage[key].isLessThan(this.maxStorage)){
                ans = false;
            }
        });
        return ans;
    }

}