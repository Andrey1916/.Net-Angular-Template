import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-angular';

  users = [
    {name: 'Bob', age: 16},
    {name: 'Alex', age: 23},
    {name: 'Andrew', age: 34}
  ];
}
