import { Injectable } from '@angular/core';
import { timer, Subscription } from 'rxjs';

import { Planet } from '../classes/planet';
import { planets, blackhole } from '../data/planets';
import BigNumber from 'bignumber.js';
// https://www.npmjs.com/package/bignumber.js

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

  constructor() {
    this.planets = planets;
    this.blackhole = blackhole;
    this.factor = new BigNumber(2);

    Object.keys(this.planets).forEach(planetName => {
      const planet = this.planets[planetName];
      if (planet.discovered){
        Object.keys(planet.production).forEach(item => this.discoveredItems.add(item));
      }
    });

    this.load();

    this.subscription = timer(1000, 1000).subscribe(res => this.increment());
    this.subscription = timer(10000, 10000).subscribe(res => this.incrementBlackHole());
  }

  load(){
    let game_encoded = localStorage.getItem("game");
    if (game_encoded){
      let game = JSON.parse(atob(game_encoded));
      game.forEach(data => {
        let id = data["id"];
        this.planets[id].loadJSON(data);
      }) 
    }
  }

  save(){
    let game = this.stringifiedPlanet();
    let game_encoded = btoa(game);
    localStorage.setItem("game", game_encoded)
  }

  private stringifiedPlanet(): string {
    let status = [];
    this.planets.forEach(planet => {
      if (planet.discovered) {
        status.push(planet.toJSON());
      }
    });
    console.log(status);
    return JSON.stringify(status);
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
