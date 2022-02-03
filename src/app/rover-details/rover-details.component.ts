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

  camera: any = '';
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.rover = this.route.snapshot.params['rover'];

    this.route.params.subscribe((param: Params) => {
      this.rover = param['rover'];
      this.camera = 'all';
      this.page = 1;
      this.fetchPhotos();
    });
    // this.camera = localStorage.getItem('Local-camera')
    //   ? localStorage.getItem('Local-camera')
    //   : 'all';
  }
  // Main data fetching function
  fetchPhotos(
    url: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.route.snapshot.params['rover']}/photos?sol=1000&page=${this.page}&api_key=${this.api_key}`
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
  newCamera(newCam: string) {
    // console.log('rover details', newCam);
    this.page = 1;
    this.camera = newCam;
    if (newCam !== 'all')
      this.fetchPhotos(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.route.snapshot.params['rover']}/photos?sol=1000&camera=${this.camera}&page=${this.page}&api_key=${this.api_key}`
      );
    else this.fetchPhotos();
  }
}
