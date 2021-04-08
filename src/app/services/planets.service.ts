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
