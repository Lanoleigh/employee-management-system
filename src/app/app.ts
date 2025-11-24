import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { NavbarComponent } from './component/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {  
  protected readonly title = signal('employee-management-system');
}
