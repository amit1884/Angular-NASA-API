import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  rover: string = '';
  show: boolean = false;
  ngOnInit(): void {
    this.rover = this.route.snapshot.params['rover'];

    this.route.params.subscribe((param: Params) => {
      this.rover = param['rover'];
    });
  }
  showSideBar() {
    this.show = !this.show;
  }
  hideSideBar() {
    this.show = false;
  }
}
