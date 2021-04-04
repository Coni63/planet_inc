import { Injectable } from '@angular/core';
import { BigNumber } from 'bignumber.js'
import { Planet } from '../classes/planet';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  items: Item[]; 
  planets: Planet[];

  // a = new BigNumber(123.4567).dividedBy(4);  // https://www.npmjs.com/package/bignumber.js
  // b = new BigNumber(1265405065467486705640657065413); 
  

  constructor() {

    this.items = [
      new Item("A"),
      new Item("B"),
      new Item("C"),
      new Item("D"),
    ]

    this.planets = [
      new Planet("Alpha", this.deepCopy(this.items), 0, "planet-blue"),
      new Planet("Beta", this.deepCopy(this.items), 1, "planet-yellow"),
      new Planet("Gamma", this.deepCopy(this.items), 2,  "planet-green"),
      new Planet("Black Hole", this.deepCopy(this.items),3, "black-hole"),
    ];

  }

  deepCopy(elems: Item[]) {
    let ans: Item[] = [];
    elems.forEach((elem) => ans.push(elem.deepcopy()));
    return ans;
  }
}
