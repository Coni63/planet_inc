import { Planet } from "../classes/planet";
import BigNumber from 'bignumber.js';

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
  "b" : new BigNumber(1)
};

gamma.production = {
  "c" : new BigNumber(1)
};

// set storage
alpha.storage = defaultStorage();
beta.storage = defaultStorage();
gamma.storage = defaultStorage();
blackhole.storage = defaultStorage();


// start point
alpha.discovered = true;

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