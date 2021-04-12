import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  text = "<h1>Hello</h1>World";

  constructor() { }

  ngOnInit(): void {
  }

}
