import { Component } from '@angular/core';
import { AdminNav } from '../admin-nav/admin-nav';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminNav,
    RouterOutlet
],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {

}
