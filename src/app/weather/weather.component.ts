import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  location = 'Aarhus';
  // Have chosen to accept the code duplication since this is just dummy data.
  weatherData: any[] = [
    {
      day: 'Today',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Tomorrow',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Day 2',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Day 3',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Day 4',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Day 5',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Day 6',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
    {
      day: 'Day 7',
      temperature: this.getRandomNumber(15, 30),
      humidity: this.getRandomNumber(40, 80),
      windVelocity: this.getRandomNumber(5, 25),
      condition: this.getRandomCondition(),
    },
  ];

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomCondition(): string {
    const conditions = [
      'Sunny',
      'Partly Cloudy',
      'Cloudy',
      'Rainy',
      'Thunderstorms',
      'Foggy',
    ];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
  }
}