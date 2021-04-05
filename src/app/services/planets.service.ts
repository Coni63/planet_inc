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
    Object.keys(this.planets[0].production).forEach(item => this.discoveredItems.add(item));

    this.subscription = timer(0, 1000).subscribe(res => this.increment());
  }

  discover(planet: Planet){
    if (!planet.next.discovered){
      planet.next.discovered = true;
      Object.keys(planet.next.production).forEach(item => this.discoveredItems.add(item));
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
