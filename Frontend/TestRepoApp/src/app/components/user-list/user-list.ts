import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, User, HelloResponse, WeatherForecast } from '../../services/api';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  helloMessage: HelloResponse | null = null;
  weatherForecast: WeatherForecast[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error = null;

    // Load hello message
    this.apiService.getHello().subscribe({
      next: (response) => this.helloMessage = response,
      error: (err) => this.error = 'Failed to load hello message: ' + err.message
    });

    // Load users
    this.apiService.getUsers().subscribe({
      next: (users) => this.users = users,
      error: (err) => this.error = 'Failed to load users: ' + err.message
    });

    // Load weather forecast
    this.apiService.getWeatherForecast().subscribe({
      next: (forecast) => {
        this.weatherForecast = forecast;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load weather forecast: ' + err.message;
        this.loading = false;
      }
    });
  }

  refreshData(): void {
    this.loadData();
  }
}
