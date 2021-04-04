import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { BigNumber } from 'bignumber.js'

import { faTachometerAlt, faArchive, faSpaceShuttle, faWarehouse, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { IPlanet } from '../../interfaces/IPlanet';

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
  a = new BigNumber(123.4567).dividedBy(4);  // https://www.npmjs.com/package/bignumber.js
  b = new BigNumber(1265405065467486705640657065413); 
  @Input() planet: IPlanet;

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

  flip(event){
    this.elem.nativeElement.querySelector(".card__inner").classList.toggle('is-flipped');
  }

  upgrade_production(event){
    console.log("upgrade_production");
    event.stopPropagation();
  }

  upgrade_storage(event){
    console.log("upgrade_storage");
    event.stopPropagation();
  }

  upgrade_speed(event){
    console.log("upgrade_speed");
    event.stopPropagation();
  }

  upgrade_acceleration(event){
    console.log("upgrade_acceleration");
    event.stopPropagation();
  }

  upgrade_volume(event){
    console.log("upgrade_volume");
    event.stopPropagation();
  }

}
