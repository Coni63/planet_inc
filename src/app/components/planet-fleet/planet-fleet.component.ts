import { Component, OnInit, Input } from '@angular/core';
import { Fleet } from 'src/app/classes/fleet';

@Component({
  selector: 'app-planet-fleet',
  templateUrl: './planet-fleet.component.html',
  styleUrls: ['./planet-fleet.component.scss']
})
export class PlanetFleetComponent implements OnInit {

  @Input() fleet: Fleet;

  constructor() { }

  ngOnInit(): void {
  }

}
