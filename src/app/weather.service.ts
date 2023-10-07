import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
/*
  This service is not in use. But if we wanted to use an API, the service would take care of communicating with the API.
*/
export class WeatherService {
  private apiKey = 'API_KEY_HERE';

  constructor(private http: HttpClient) {}
  // Not in use
  getWeather(city: string){
    return this.http.get(
        'https://api.weatherapi.com/v1/current.json?q='+ city +'&key=' + this.apiKey
    );
  }
  // If we define a variable to contain the apiUrl, we could also write the method like this
  /*getWeather(city: string) {
    const url = `${this.apiUrl}?access_key=${this.apiKey}&query=${city}`;
    return this.http.get(url);
  }*/
}
