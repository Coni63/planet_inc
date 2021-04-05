import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { faTachometerAlt, faArchive, faSpaceShuttle, faWarehouse, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { Planet } from 'src/app/classes/planet';

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
  @Input() planet: Planet;
  @Input() discoveredItems: Set<string>;

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    console.log(this.planet);
  }

  flip(event){
    this.elem.nativeElement.querySelector(".card__inner").classList.toggle('is-flipped');
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
