import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  rover: string = '';

  ngOnInit(): void {
    this.rover = this.route.snapshot.params['rover'];

    this.route.params.subscribe((param: Params) => {
      this.rover = param['rover'];
    });
  }
}
