import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  @Output() solFilter = new EventEmitter<string>();
  @Output() earthDateFilter = new EventEmitter<string>();
  @Input() cam: string = 'all';
  @Input() sol: string = '1000';
  @Input() e_date: string = '';
  str = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.cam = 'all';
      this.e_date = '';
      this.sol = '1000';
    });
  }

  solChangeHandler() {
    this.str = this.sol + '&' + this.cam;
    this.solFilter.emit(this.str);
  }

  earthDateChangeHandler() {
    this.str = this.e_date + '&' + this.cam;
    this.earthDateFilter.emit(this.str);
  }

  resetFilter() {
    this.cam = 'all';
    this.e_date = '';
    this.sol = '1000';
    this.solChangeHandler();
  }
}
