import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  // If we actually used an API we would dependency inject a service that would communicate with the API here.
  constructor(private weatherService: WeatherService) {
  }
}
