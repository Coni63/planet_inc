import { Component, OnInit, Input } from '@angular/core';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-planet-storage',
  templateUrl: './planet-storage.component.html',
  styleUrls: ['./planet-storage.component.scss']
})
export class PlanetStorageComponent implements OnInit {

  @Input() items: { [key : string] : BigNumber };
  @Input() discoveredItems: Set<string>;
  @Input() maxStorage: BigNumber;

  constructor() { }

  ngOnInit(): void {
  }

}
