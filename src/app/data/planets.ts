import { Planet } from "../classes/planet";
import BigNumber from 'bignumber.js';
import { Cost } from '../classes/upgrade_costs';

function defaultStorage(): {[key: string]: BigNumber} {
  return {
    "a" : new BigNumber(0),
    "b" : new BigNumber(0),
    "c" : new BigNumber(0),
    "d" : new BigNumber(0),
    "e" : new BigNumber(0),
    "f" : new BigNumber(0),
    "g" : new BigNumber(0),
    "h" : new BigNumber(0),
    "i" : new BigNumber(0),
  };
}


const alpha = new Planet("Alpha", 0, "planet-blue");
const beta = new Planet("Beta", 1, "planet-yellow");
const gamma = new Planet("Gamma", 2,  "planet-green");
const blackhole = new Planet("Black Hole", 3, "black-hole");

// set production
alpha.production = {
  "a" : new BigNumber(1)
};

beta.production = {
  "b" : new BigNumber(10)
};

beta.consumption = {
  "a" : new BigNumber(5)
};

gamma.production = {
  "c" : new BigNumber(1)
};

// set storage
alpha.storage = defaultStorage();
beta.storage = defaultStorage();
gamma.storage = defaultStorage();
blackhole.storage = defaultStorage();

// discovery costs
alpha.cost_discovery = {
  "a" : new Cost(new BigNumber(100))
}
beta.cost_discovery = {
  "b" : new Cost(new BigNumber(100))
}
gamma.cost_discovery = {
  "c" : new Cost(new BigNumber(100))
}

// set upgrade costs
alpha.cost_production = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_storage = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_units = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_speed = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_acceleration = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_volume = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};

beta.cost_production = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_storage = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_units = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_speed = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_acceleration = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_volume = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};

gamma.cost_production = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_storage = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_units = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_speed = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_acceleration = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_volume = {
  "a" : new Cost(new BigNumber(5),new BigNumber(2), false)
};

// start point
alpha.discovered = true;
beta.discovered = true;

// set graph
alpha.next = beta;
beta.next = gamma;
gamma.next = blackhole;

export var planets = [
  alpha,
  beta,
  gamma,
  blackhole,
];