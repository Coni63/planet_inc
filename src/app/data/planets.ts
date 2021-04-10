import { Planet } from "../classes/planet";
import BigNumber from 'bignumber.js';
import { Cost } from '../classes/upgrade_costs';

enum planetName {
  a = "alpha",
  b = "beta",
  c = "gamma",
  d = "balckhole",
  e = "e",
  f = "f",
  g = "g",
  h = "h",
  i = "i",
  j = "j",
  k = "k",
  l = "l",
  m = "m",
  n = "n",
  o = "o",
  p = "p",
  q = "q",
  r = "r",
  s = "s",
  t = "t",
  u = "u",
  v = "v",
  w = "w",
  x = "x",
  y = "y",
  z = "z",
};

enum itemName {
  a = "a",
  b = "b",
  c = "c",
  d = "d",
  e = "e",
  f = "f",
  g = "g",
  h = "h",
  i = "i",
  j = "j",
  k = "k",
  l = "l",
  m = "m",
  n = "n",
  o = "o",
  p = "p",
  q = "q",
  r = "r",
  s = "s",
  t = "t",
  u = "u",
  v = "v",
  w = "w",
  x = "x",
  y = "y",
  z = "z",
};

function defaultStorage(): {[key: string]: BigNumber} {
  return {
    [itemName.a] : new BigNumber(0),
    [itemName.b] : new BigNumber(0),
    [itemName.c] : new BigNumber(0),
    [itemName.d] : new BigNumber(0),
    [itemName.e] : new BigNumber(0),
    [itemName.f] : new BigNumber(0),
    [itemName.g] : new BigNumber(0),
    [itemName.h] : new BigNumber(0),
    [itemName.i] : new BigNumber(0),
    [itemName.j] : new BigNumber(0),
    [itemName.l] : new BigNumber(0),
    [itemName.m] : new BigNumber(0),
    [itemName.n] : new BigNumber(0),
    [itemName.o] : new BigNumber(0),
    [itemName.p] : new BigNumber(0),
    [itemName.q] : new BigNumber(0),
    [itemName.r] : new BigNumber(0),
    [itemName.s] : new BigNumber(0),
    [itemName.t] : new BigNumber(0),
    [itemName.u] : new BigNumber(0),
    [itemName.v] : new BigNumber(0),
    [itemName.w] : new BigNumber(0),
    [itemName.y] : new BigNumber(0),
    [itemName.z] : new BigNumber(0),
  };
}


const alpha = new Planet(planetName.a, 0, "planet-blue");
const beta = new Planet(planetName.b, 1, "planet-yellow");
const gamma = new Planet(planetName.c, 2,  "planet-green");
export const blackhole = new Planet(planetName.d, 3, "black-hole");

// set production
alpha.production = {
  [itemName.a] : new BigNumber(1)
};

beta.production = {
  [itemName.b] : new BigNumber(10)
};

beta.consumption = {
  [itemName.a] : new BigNumber(5),
  [itemName.b] : new BigNumber(5),
  [itemName.c] : new BigNumber(5),
};

gamma.production = {
  [itemName.c] : new BigNumber(1)
};

gamma.consumption = {
  [itemName.a] : new BigNumber(5),
  [itemName.b] : new BigNumber(5),
  [itemName.c] : new BigNumber(5),
};

// set storage
alpha.storage = defaultStorage();
beta.storage = defaultStorage();
gamma.storage = defaultStorage();
blackhole.storage = defaultStorage();

// discovery costs
alpha.cost_discovery = {
  [itemName.a] : new Cost(new BigNumber(100))
}
beta.cost_discovery = {
  [itemName.b] : new Cost(new BigNumber(100))
}
gamma.cost_discovery = {
  [itemName.c] : new Cost(new BigNumber(100))
}

// set upgrade costs
alpha.cost_production = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_storage = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_units = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_speed = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_acceleration = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
alpha.cost_volume = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};

beta.cost_production = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_storage = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_units = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_speed = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_acceleration = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
beta.cost_volume = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};

gamma.cost_production = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_storage = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_units = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_speed = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_acceleration = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};
gamma.cost_volume = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2), false)
};

// start point
alpha.discovered = true;
beta.discovered = true;
gamma.discovered = true;
blackhole.discovered = true;

// set graph
alpha.next = beta;
beta.next = gamma;
gamma.next = blackhole;

export const planets = [
  alpha,
  beta,
  gamma,
  blackhole,
];