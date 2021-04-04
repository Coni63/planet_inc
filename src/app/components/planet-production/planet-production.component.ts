import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/IItem';

@Component({
  selector: 'app-planet-production',
  templateUrl: './planet-production.component.html',
  styleUrls: ['./planet-production.component.scss']
})
export class PlanetProductionComponent implements OnInit {

  @Input() items: IItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
