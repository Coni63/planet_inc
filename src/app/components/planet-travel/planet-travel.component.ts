import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/classes/planet';
import { Fleet } from 'src/app/classes/fleet';

@Component({
  selector: 'app-planet-travel',
  templateUrl: './planet-travel.component.html',
  styleUrls: ['./planet-travel.component.scss']
})
export class PlanetTravelComponent implements OnInit {

  @Input() fleet: Fleet;
  @Input() discoveredPlanets: Planet[];

  constructor() { }

  ngOnInit(): void {
  }

}
