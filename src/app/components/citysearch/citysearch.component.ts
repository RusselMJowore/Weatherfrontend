import { Component } from '@angular/core';
import { WeatherappserviceService } from '../../services/weatherappservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { routes } from '../../app.routes';
import { NgModule }       from '@angular/core';

@Component({
  selector: 'app-citysearch',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './citysearch.component.html',
  styleUrl: './citysearch.component.css'
})
export class CitysearchComponent {

data: any[] = [];
name: string = '';
constructor (private router: Router, private weatherappserviceService : WeatherappserviceService){}

loadcity(){
  this.weatherappserviceService.getcity(this.name).subscribe(data =>{this.data = data})
}
search(){
  this.loadcity();
}
getfivedayforcast(lat: number, lon: number) {
  this.router.navigate(['/fivedayforcast'], { queryParams: { lat: lat, lon: lon } });
}

}
