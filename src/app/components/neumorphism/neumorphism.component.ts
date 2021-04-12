import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-neumorphism',
  templateUrl: './neumorphism.component.html',
  styleUrls: ['./neumorphism.component.scss']
})
export class NeumorphismComponent implements OnInit {

  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
