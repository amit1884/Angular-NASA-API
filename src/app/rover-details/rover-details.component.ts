import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.css'],
})
export class RoverDetailsComponent implements OnInit {
  rover = '';
  data = [];
  page = 1;
  api_key = 'X6f0wu1SqNlgbQV8pu2KtEb3R0bewi4xvWh5KBcM';
  loading: boolean = false;

  camera: string = '';
  sol: string = '1000';
  e_date: string = '';
  base_path = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.rover = this.route.snapshot.params['rover'];

    this.route.params.subscribe((param: Params) => {
      this.rover = param['rover'];
      this.camera = 'all';
      this.page = 1;
      this.sol = '1000';

      this.fetchPhotos();
    });
    // this.camera = localStorage.getItem('Local-camera')
    //   ? localStorage.getItem('Local-camera')
    //   : 'all';
  }

  // Main data fetching function
  fetchPhotos(
    url: string = `${this.base_path}/${this.route.snapshot.params['rover']}/photos?sol=${this.sol}&page=${this.page}&api_key=${this.api_key}`
  ) {
    this.loading = true;
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.data = response.photos;
      this.loading = false;
    });
  }

  nextHandler() {
    this.page++;
    this.fetchPhotos();
  }
  prevHandler() {
    this.page--;
    this.fetchPhotos();
  }

  // Setting the camera name for filtering
  // newCamera(newCam: string) {
  //   this.page = 1;
  //   this.camera = newCam;
  //   if (newCam !== 'all')
  //     this.fetchPhotos(
  //       `${this.base_path}/${this.route.snapshot.params['rover']}/photos?sol=1000&camera=${this.camera}&page=${this.page}&api_key=${this.api_key}`
  //     );
  //   else this.fetchPhotos();
  // }

  solFilter(query: string) {
    this.page = 1;
    this.sol = query.split('&')[0];
    this.camera = query.split('&')[1];
    console.log('solfilter----', this.sol, this.camera);
    if (this.camera !== 'all')
      this.fetchPhotos(
        `${this.base_path}/${this.route.snapshot.params['rover']}/photos?sol=${this.sol}&camera=${this.camera}&page=${this.page}&api_key=${this.api_key}`
      );
    else this.fetchPhotos();
  }

  earthDateFilter(query: string) {
    this.page = 1;
    this.e_date = query.split('&')[0];
    this.camera = query.split('&')[1];
    console.log('Earth date ', this.e_date, this.camera);

    if (this.camera === 'all') {
      console.log(
        'camera all',
        `${this.base_path}/${this.route.snapshot.params['rover']}/photos?earth_date=${this.e_date}&page=${this.page}&api_key=${this.api_key}`
      );
      this.fetchPhotos(
        `${this.base_path}/${this.route.snapshot.params['rover']}/photos?earth_date=${this.e_date}&page=${this.page}&api_key=${this.api_key}`
      );
    } else {
      console.log(
        ' camera',
        `${this.base_path}/${this.route.snapshot.params['rover']}/photos?earth_date=${this.e_date}&camera=${this.camera}&page=${this.page}&api_key=${this.api_key}`
      );
      this.fetchPhotos(
        `${this.base_path}/${this.route.snapshot.params['rover']}/photos?earth_date=${this.e_date}&camera=${this.camera}&page=${this.page}&api_key=${this.api_key}`
      );
    }
  }
}
