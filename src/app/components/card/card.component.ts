import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { faTachometerAlt, faArchive, faSpaceShuttle, faWarehouse, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Planet } from 'src/app/classes/planet';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  speed = faTachometerAlt;
  acceleration = faSpaceShuttle;
  volume = faArchive;
  storage = faWarehouse;
  production = faPlusSquare;
  search = faSearch;

  planets: Planet[];

  @Input() planet: Planet;
  @Input() discoveredItems: Set<string>;

  constructor(private elem: ElementRef, private _planetService: PlanetsService) {
    this.planets = this._planetService.planets;
  }

  ngOnInit(): void { }

  flip(event){
    this.elem.nativeElement.querySelector(".card__inner").classList.toggle('is-flipped');
    event.stopPropagation();
  }

  discover(event){
    this._planetService.discover(this.planet);
    event.stopPropagation();
  }

  upgrade_production(event){
    this.planet.upgrade_production();
    event.stopPropagation();
  }

  upgrade_storage(event){
    this.planet.upgrade_storage();
    event.stopPropagation();
  }

  upgrade_units(event){
    this.planet.upgrade_units();
    event.stopPropagation();
  }

  upgrade_speed(event){
    this.planet.upgrade_speed();
    event.stopPropagation();
  }

  upgrade_acceleration(event){
    this.planet.upgrade_acceleration();
    event.stopPropagation();
  }

  upgrade_volume(event){
    this.planet.upgrade_volume();
    event.stopPropagation();
  }

}
