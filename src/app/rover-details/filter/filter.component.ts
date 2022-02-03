import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() newCamera = new EventEmitter<string>();
  @Input() cam: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSelectCamera(value: string) {
    // localStorage.setItem('Local-camera', value);
    this.newCamera.emit(value.toLocaleLowerCase());
  }
}
