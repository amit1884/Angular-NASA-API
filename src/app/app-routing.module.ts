import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RoverDetailsComponent } from './rover-details/rover-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rover-details/:rover',
    component: RoverDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
