import { Injectable } from '@angular/core';
import { timer, Subscription } from 'rxjs';

import { Planet } from '../classes/planet';
import { planets, blackhole } from '../data/planets';
import BigNumber from 'bignumber.js'; // https://www.npmjs.com/package/bignumber.js
import { IPlanetState } from '../classes/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  intervalId
  planets: Planet[];
  blackhole: Planet;
  factor: BigNumber;
  discoveredItems: Set<string> = new Set<string>();
  subscription: Subscription;
  duration: number;

  constructor() {
    this.planets = planets;
    this.blackhole = blackhole;
    this.factor = new BigNumber(2);
    this.duration = 0;

    Object.keys(this.planets).forEach(planetName => {
      const planet = this.planets[planetName];
      if (planet.discovered){
        Object.keys(planet.production).forEach(item => this.discoveredItems.add(item));
      }
    });

    this.load();

    this.show_all();

    this.subscription = timer(1000, 1000).subscribe(res => this.increment());
    this.subscription = timer(10000, 10000).subscribe(res => this.incrementBlackHole());
  }

  load(){
    let data_encoded = localStorage.getItem("data");
    if (data_encoded){
      let data = JSON.parse(atob(data_encoded));
      this.duration = data.duration;
      data.planet.forEach(data => {
        let id = data["id"];
        this.planets[id].loadJSON(data);
      });
      console.log("game restored");
    }
    console.log("no save found");
  }

  save(){
    let data = {
      planet: this.exportPlanet(),
      duration: this.duration
    }
    let data_encoded = btoa(JSON.stringify(data));
    localStorage.setItem("data", data_encoded);
    console.log("saved!");
  }

  private exportPlanet(): IPlanetState[] {
    let status: IPlanetState[] = [];
    this.planets.forEach(planet => {
      if (planet.discovered) {
        status.push(planet.toJSON());
      }
    });
    return status;
  }

  private show_all(){
    this.planets.forEach(planet => planet.discovered = true);
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

  incrementBlackHole(){
    this.blackhole.incrementBlackhole(this.factor);
    if (this.blackhole.isOver()){
      // TODO: add message 
      console.log("over");
    }
  }

}
