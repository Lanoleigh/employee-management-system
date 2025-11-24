import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar-component/navbar-component'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showNavbar = true;

  noNavbarRoutes = [
    '/register',
    '/admin-dashboard'
];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showNavbar = !this.noNavbarRoutes.includes(event.urlAfterRedirects);
      });
  }
}
