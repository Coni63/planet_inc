import { Injectable } from '@angular/core';
import { timer, Subscription } from 'rxjs';

import { Planet } from '../classes/planet';
import { planets } from '../data/planets';
// https://www.npmjs.com/package/bignumber.js

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  intervalId
  planets: Planet[];
  discoveredItems: Set<string> = new Set<string>();
  subscription: Subscription;

  constructor() {
    this.planets = planets;

    Object.keys(this.planets).forEach(planetName => {
      const planet = this.planets[planetName];
      if (planet.discovered){
        Object.keys(planet.production).forEach(item => this.discoveredItems.add(item));
      }
    });

    this.discoveredItems.add("a");
    this.discoveredItems.add("b");
    this.discoveredItems.add("c");
    this.discoveredItems.add("d");
    this.discoveredItems.add("e");
    this.discoveredItems.add("f");
    this.discoveredItems.add("g");
    this.discoveredItems.add("h");
    this.discoveredItems.add("i");
    this.discoveredItems.add("j");
    this.discoveredItems.add("k");
    this.discoveredItems.add("l");
    this.discoveredItems.add("m");
    this.discoveredItems.add("n");
    this.discoveredItems.add("o");
    this.discoveredItems.add("p");
    this.discoveredItems.add("q");
    this.discoveredItems.add("r");
    this.discoveredItems.add("s");
    this.discoveredItems.add("t");
    this.discoveredItems.add("u");
    this.discoveredItems.add("v");
    this.discoveredItems.add("w");
    this.discoveredItems.add("x");
    this.discoveredItems.add("y");
    this.discoveredItems.add("z");

    this.subscription = timer(0, 1000).subscribe(res => this.increment());
  }

  discover(currentPlanet: Planet){
    if (!currentPlanet.next.discovered){
      currentPlanet.next.discovered = true;
      Object.keys(currentPlanet.next.production).forEach(item => this.discoveredItems.add(item));
    }
  }

  increment(){
    this.planets.forEach((planet) => {
      if (planet.discovered){
        planet.increment();
      } 
    });
  }

}
