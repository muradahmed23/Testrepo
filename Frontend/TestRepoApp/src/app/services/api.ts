import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export interface HelloResponse {
  message: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://localhost:7155'; // Default .NET 8 HTTPS port

  constructor(private http: HttpClient) { }

  getHello(): Observable<HelloResponse> {
    return this.http.get<HelloResponse>(`${this.baseUrl}/api/hello`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/api/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/api/users/${id}`);
  }

  getWeatherForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(`${this.baseUrl}/weatherforecast`);
  }
}
