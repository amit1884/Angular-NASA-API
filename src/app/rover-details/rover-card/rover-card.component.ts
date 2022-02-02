import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rover-card',
  templateUrl: './rover-card.component.html',
  styleUrls: ['./rover-card.component.css'],
})
export class RoverCardComponent implements OnInit {
  @Input() cardItem: any;
  constructor() {}

  ngOnInit(): void {}
}
