import { Component } from '@angular/core';
import { IPlanet } from './interfaces/IPlanet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'incremental';

  planets : IPlanet[] = [
    {
      name: "aaaaa",
      production: [],
      color: "planet-yellow",
    },
    {
      name: "bbbbbb",
      production: [],
      color: "planet-blue",
    },
    {
      name: "ccccc",
      production: [],
      color: "black-hole",
    }
  ];



}
