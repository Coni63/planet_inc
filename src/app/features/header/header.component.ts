import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  saveIcon = faSave;

  constructor(private _router: Router, private _planetService: PlanetsService) { }

  ngOnInit(): void {
  }

  redirect(path){
    this._router.navigate([path], { skipLocationChange: true });
  }
  
  save(){
    this._planetService.save();
  }

}
