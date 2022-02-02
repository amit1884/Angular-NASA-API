import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() newCamera = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('camera'))
      this.newCamera.emit(JSON.stringify(localStorage.getItem('camera')));
  }

  onSelectCamera(value: string) {
    // console.log(value.toLocaleLowerCase());
    localStorage.setItem('camera', value.toLocaleLowerCase());
    this.newCamera.emit(value.toLocaleLowerCase());
  }
}
