import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherappserviceService } from '../../services/weatherappservice.service';
import { CommonModule } from '@angular/common';
import { List, Root } from '../../models/weather';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fivedayforcast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fivedayforcast.component.html',
  styleUrl: './fivedayforcast.component.css'
})
export class FivedayforcastComponent {
  allweather?:  Root;  
  weatherData: any = [];
  timeline?: {timeofday: any}[];
  groupedForecast: any = [];
  primarydispaly =true;
  secondarydispaly = false;
  forecastdetails:any = [];
  
  constructor(private route: ActivatedRoute, private weatherappserviceService: WeatherappserviceService, private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const lat = params['lat'];
      const lon = params['lon'];
      this.loadfivedayforcast(lat,lon);
    });
  }
  groupForecastByDay(forecast: List[]): any[][] {
    const groupedForecast: any[][] = [];
    let currentDate: string;
  
    forecast.forEach(item => {
      const date = new Date(item.dt_txt).toLocaleDateString();
      if (date !== currentDate) {
        groupedForecast.push([item]);
        currentDate = date;
      } else {
        groupedForecast[groupedForecast.length - 1].push(item);
      }
    });
  
    return groupedForecast;
  }

  loadfivedayforcast(lat: number, lon: number) {

    this.weatherappserviceService.getfivedayforcast(lat, lon).subscribe((data: Root) => {
      this.allweather = data;
       this.fivedayforcast(data.list)
       this.gettodayforcast(data.list)
       this.groupedForecast = this.groupForecastByDay(data.list);
    });
  }

  fivedayforcast(data: any){
    for(let i = 0; i < data.length; i=i + 8){
      this.weatherData.push(data[i]);
      }
      console.log(this.weatherData)
  }
gettodayforcast(day: any){
  for (const  forecasts of day){
    this.timeline?.push({timeofday: forecasts.dt_txt} )
    console.log(this.timeline)
  }

}
toggle(){
  this.primarydispaly = !this.primarydispaly;
  this.secondarydispaly = !this.secondarydispaly;
}
detailed(data: any){
  this.forecastdetails.push(data);

}
getWeatherIconUrl(icon: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://openweathermap.org/img/wn/${icon}.png`
  );
}

}



