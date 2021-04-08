import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/classes/planet';
import { Fleet } from 'src/app/classes/fleet';
import { BigNumberPipe } from 'src/app/pipes/big-number.pipe';

@Component({
  selector: 'app-planet-travel',
  templateUrl: './planet-travel.component.html',
  styleUrls: ['./planet-travel.component.scss']
})
export class PlanetTravelComponent implements OnInit {

  @Input() fleet: Fleet;
  @Input() planets: Planet[];

  constructor(private _pipe: BigNumberPipe) { }

  ngOnInit(): void {
  }

  sendTo(event, planet: Planet){
    this.fleet.sendTo(planet);
    event.stopPropagation();
  }

  isTraveling(): boolean {
    return this.fleet.isTraveling;
  }

  getButtonText(): string {
    if (this.isTraveling() && this.fleet.isForward){
      return ">> " + this._pipe.transform(this.fleet.remainingTime) + "s";
    } else if (this.isTraveling() && !this.fleet.isForward){
      return "<< " + this._pipe.transform(this.fleet.remainingTime) + "s";
    } else {
      return "Go !";
    }
  }

}
