import { Component, OnInit, Input } from '@angular/core';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-planet-consumption',
  templateUrl: './planet-consumption.component.html',
  styleUrls: ['./planet-consumption.component.scss']
})
export class PlanetConsumptionComponent implements OnInit {

  @Input() items: { [key : string] : BigNumber };
  @Input() discoveredItems: Set<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
