import { Component } from '@angular/core';
import { Planet } from './classes/planet';
import { PlanetsService } from './services/planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'incremental';
  planets : Planet[];
  discoveredItems: Set<string>;

  constructor(private _planetService: PlanetsService) { }

  ngOnInit() {
    this.planets = this._planetService.planets;
    this.discoveredItems = this._planetService.discoveredItems;
  }

  discover() {
    this._planetService.discover();
  }
}
