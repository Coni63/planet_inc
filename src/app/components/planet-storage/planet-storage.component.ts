import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-planet-storage',
  templateUrl: './planet-storage.component.html',
  styleUrls: ['./planet-storage.component.scss']
})
export class PlanetStorageComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
