import { Component, OnInit, Input } from '@angular/core';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-planet-production',
  templateUrl: './planet-production.component.html',
  styleUrls: ['./planet-production.component.scss']
})
export class PlanetProductionComponent implements OnInit {

  @Input() items: { [key : string] : BigNumber };
  @Input() discoveredItems: Set<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
