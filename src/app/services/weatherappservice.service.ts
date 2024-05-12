import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Root } from '../models/weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherappserviceService {

  constructor( private http: HttpClient) { }
  getcity(name: string): Observable <any[]>{
    return this.http.get<any[]>("http://localhost:5057/api/Home/getcity?name="+name)
  }
  getfivedayforcast(lon: number, lat: number): Observable <Root>{
    return this.http.get<Root>("http://localhost:5057/api/Home/getfivedayforecast?lat="+lat+"&lon="+lon)
                                  
  }
}
