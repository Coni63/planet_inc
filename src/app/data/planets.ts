import { Planet } from "../classes/planet";
import BigNumber from 'bignumber.js';
import { Cost } from '../classes/upgrade_costs';

// https://www.fantasynamegenerators.com/planet_names.php
// https://www.fantasynamegenerators.com/material-names.php

enum planetName {
  a = "Bohirus",
  b = "Tocreon",
  c = "Monduevis",
  d = "Nothazuno",
  e = "Gurn 5Q00",
  f = "Egriuhiri",
  g = "Iustea",
  h = "Henov",
  i = "Celvonoe",
  j = "Bypso 96S",
  k = "Nocruna",
  l = "Dradus UXJ",
  m = "Sipalia",
  n = "Doania",
  o = "Ineyama",
  p = "Drov X9PZ",
  q = "None 8",
  r = "Guarilia",
  s = "Chisagawa",
  t = "Ieria",
  u = "Anope",
  v = "Trarth JP9",
  w = "Xebapus",
  x = "Zoutov",
  y = "X Æ A-12",
  z = "Powehi",
};

enum itemName {
  a = "Borhium",
  b = "Tocrav",
  c = "Mondiul",
  d = "Nothilum",
  e = "Gornav",
  f = "Egritin",
  g = "Ius",
  h = "Henium V",
  i = "Volnec",
  j = "Bopsy",
  k = "Nucrite",
  l = "Dradii",
  m = "Pilyum",
  n = "Daonilia",
  o = "Namya",
  p = "X9PZ-IIX",
  q = "Void",
  r = "Guarilium",
  s = "Chizaam",
  t = "Radiant",
  u = "Napom",
  v = "Tietis",
  w = "Xebus",
  x = "Zouvton",
  y = "Tesla",
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
    [itemName.k] : new BigNumber(0),
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
    [itemName.x] : new BigNumber(0),
    [itemName.y] : new BigNumber(0),
  };
}

const pa = new Planet(planetName.a, 0, "planet-blue");
const pb = new Planet(planetName.b, 1, "planet-yellow");
const pc = new Planet(planetName.c, 2,  "planet-green");
const pd = new Planet(planetName.d, 3,  "planet-green");
const pe = new Planet(planetName.e, 4,  "planet-green");
const pf = new Planet(planetName.g, 5,  "planet-green");
const pg = new Planet(planetName.h, 6,  "planet-green");
const ph = new Planet(planetName.f, 7,  "planet-green");
const pi = new Planet(planetName.i, 8,  "planet-green");
const pj = new Planet(planetName.j, 9,  "planet-green");
const pk = new Planet(planetName.k, 10,  "planet-green");
const pl = new Planet(planetName.l, 11,  "planet-green");
const pm = new Planet(planetName.m, 12,  "planet-green");
const pn = new Planet(planetName.n, 13,  "planet-green");
const po = new Planet(planetName.o, 14,  "planet-green");
const pp = new Planet(planetName.p, 15,  "planet-green");
const pq = new Planet(planetName.q, 16,  "planet-green");
const pr = new Planet(planetName.r, 17,  "planet-green");
const ps = new Planet(planetName.s, 18,  "planet-green");
const pt = new Planet(planetName.t, 19,  "planet-green");
const pu = new Planet(planetName.u, 20,  "planet-green");
const pv = new Planet(planetName.v, 21,  "planet-green");
const pw = new Planet(planetName.w, 22,  "planet-green");
const px = new Planet(planetName.x, 23,  "planet-green");
const py = new Planet(planetName.y, 24,  "planet-green");

export const blackhole = new Planet(planetName.d, 3, "black-hole");

// set production
pa.production = { [itemName.a] : new BigNumber(1) };
pb.production = { [itemName.b] : new BigNumber(10) };
pc.production = { [itemName.c] : new BigNumber(1) };
pd.production = { [itemName.d] : new BigNumber(1) };
pe.production = { [itemName.e] : new BigNumber(10) };
pf.production = { [itemName.f] : new BigNumber(1) };
pg.production = { [itemName.g] : new BigNumber(1) };
ph.production = { [itemName.h] : new BigNumber(10) };
pi.production = { [itemName.i] : new BigNumber(1) };
pj.production = { [itemName.j] : new BigNumber(1) };
pk.production = { [itemName.k] : new BigNumber(10) };
pl.production = { [itemName.l] : new BigNumber(1) };
pm.production = { [itemName.m] : new BigNumber(1) };
pn.production = { [itemName.n] : new BigNumber(10) };
po.production = { [itemName.o] : new BigNumber(1) };
pp.production = { [itemName.p] : new BigNumber(1) };
pq.production = { [itemName.q] : new BigNumber(10) };
pr.production = { [itemName.r] : new BigNumber(1) };
ps.production = { [itemName.s] : new BigNumber(1) };
pt.production = { [itemName.t] : new BigNumber(10) };
pu.production = { [itemName.u] : new BigNumber(1) };
pv.production = { [itemName.v] : new BigNumber(1) };
pw.production = { [itemName.w] : new BigNumber(10) };
px.production = { [itemName.x] : new BigNumber(1) };
py.production = { [itemName.y] : new BigNumber(1) };

// set consumption

pc.consumption = {
  [itemName.a] : new BigNumber(5),
  [itemName.b] : new BigNumber(5),
  [itemName.c] : new BigNumber(5),
};

// set storage
pa.storage = defaultStorage();
pb.storage = defaultStorage();
pc.storage = defaultStorage();
pd.storage = defaultStorage();
pe.storage = defaultStorage();
pf.storage = defaultStorage();
pg.storage = defaultStorage();
ph.storage = defaultStorage();
pi.storage = defaultStorage();
pj.storage = defaultStorage();
pk.storage = defaultStorage();
pl.storage = defaultStorage();
pm.storage = defaultStorage();
pn.storage = defaultStorage();
po.storage = defaultStorage();
pp.storage = defaultStorage();
pq.storage = defaultStorage();
pr.storage = defaultStorage();
ps.storage = defaultStorage();
pt.storage = defaultStorage();
pu.storage = defaultStorage();
pv.storage = defaultStorage();
pw.storage = defaultStorage();
px.storage = defaultStorage();
py.storage = defaultStorage();
blackhole.storage = defaultStorage();

// discovery costs
pa.cost_discovery = {
  [itemName.a] : new Cost(new BigNumber(100))
}
pb.cost_discovery = {
  [itemName.b] : new Cost(new BigNumber(100))
}
pc.cost_discovery = {
  [itemName.c] : new Cost(new BigNumber(100))
}

// set upgrade costs
pa.cost_production = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pa.cost_storage = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pa.cost_units = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pa.cost_speed = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pa.cost_acceleration = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pa.cost_volume = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};

pb.cost_production = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pb.cost_storage = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pb.cost_units = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pb.cost_speed = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pb.cost_acceleration = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pb.cost_volume = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};

pc.cost_production = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pc.cost_storage = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pc.cost_units = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pc.cost_speed = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pc.cost_acceleration = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};
pc.cost_volume = {
  [itemName.a] : new Cost(new BigNumber(5),new BigNumber(2))
};

// start point
pa.discovered = true;

// set graph
pa.next = pb;
pb.next = pc;
pc.next = pd;
pd.next = pe;
pe.next = pf;
pf.next = pg;
pg.next = ph;
ph.next = pi;
pi.next = pj;
pj.next = pk;
pk.next = pl;
pl.next = pm;
pm.next = pn;
pn.next = po;
po.next = pp;
pp.next = pq;
pq.next = pr;
pr.next = ps;
ps.next = pt;
pt.next = pu;
pu.next = pv;
pv.next = pw;
pw.next = px;
px.next = py;
py.next = blackhole;

export const planets = [
  pa,
  pb,  
  pc,  
  pd,  
  pe,  
  pf,  
  pg,  
  ph,  
  pi,  
  pj,  
  pk,
  pl,
  pm,
  pn,
  po,
  pp,
  pq,
  pr,
  ps,
  pt,
  pu,
  pv,
  pw,
  px,
  py,
  blackhole
];