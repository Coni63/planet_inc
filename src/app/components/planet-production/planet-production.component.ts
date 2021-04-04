import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-planet-production',
  templateUrl: './planet-production.component.html',
  styleUrls: ['./planet-production.component.scss']
})
export class PlanetProductionComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
