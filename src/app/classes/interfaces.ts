export interface ICostState {
    currentCost: string;
    level: number;
}

export interface IFleetState {
    count: string;
    volume: string;
    speed: string;
    acceleration: string;
}

export interface IPlanetState {
    id: number;
    production: { [key : string] : string };
    consumption: { [key : string] : string };
    storage: { [key : string] : string };
    maxStorage: string;
    discovered: boolean;
    fleet: IFleetState;
    cost_production: {[key: string] : ICostState};  // number will be the level
    cost_storage: {[key: string] : ICostState};
    cost_units: {[key: string] : ICostState};
    cost_speed: {[key: string] : ICostState};
    cost_acceleration: {[key: string] : ICostState};
    cost_volume: {[key: string] : ICostState};
    cost_discovery: {[key: string] : ICostState};
}