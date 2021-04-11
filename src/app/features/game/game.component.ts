import { Component, OnInit } from '@angular/core';
import { Planet } from '../../classes/planet';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  planets : Planet[];
  discoveredItems: Set<string>;

  constructor(private _planetService: PlanetsService) { }

  ngOnInit(): void {
    this.planets = this._planetService.planets;
    this.discoveredItems = this._planetService.discoveredItems;
  }

}
