import { Injectable } from '@angular/core';
import { timer, Subscription } from 'rxjs';

import { Planet } from '../classes/planet';
import { Item } from '../classes/item';

// https://www.npmjs.com/package/bignumber.js

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  intervalId
  items: Item[]; 
  planets: Planet[];
  discoveredItems: Set<string> = new Set<string>();
  discoveredPlanets: Planet[] = [];
  subscription: Subscription;

  constructor() {

    this.items = [
      new Item("λ"),
      new Item("B"),
      new Item("C"),
      new Item("D"),
      new Item("E"),
      new Item("F"),
      new Item("G"),
      new Item("H"),
    ];

    this.planets = [
      new Planet("Alpha", this._deepCopy(this.items), 0, "planet-blue"),
      new Planet("Beta", this._deepCopy(this.items), 1, "planet-yellow"),
      new Planet("Gamma", this._deepCopy(this.items), 2,  "planet-green"),
      new Planet("Black Hole", this._deepCopy(this.items),3, "black-hole"),
    ];

    this.subscription = timer(0, 1000).subscribe(res => this.increment());

    this.discover(-1); // discover 1st planet to start
  }

  discover(planet_id: number){
    let new_planet = this.planets[planet_id+1]
    new_planet.discovered = true;
    this.discoveredItems.add(new_planet.production.name);
    this.discoveredPlanets.push(new_planet);
  }

  increment(){
    this.planets.forEach((planet) => {
      if (planet.discovered){
        planet.increment();
      } 
    });
  }

  private _deepCopy(elems: Item[]) {
    let ans: Item[] = [];
    elems.forEach((elem) => ans.push(elem.deepcopy()));
    return ans;
  }
}
