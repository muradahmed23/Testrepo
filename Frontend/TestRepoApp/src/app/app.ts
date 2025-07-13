import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TestRepoApp');
}
