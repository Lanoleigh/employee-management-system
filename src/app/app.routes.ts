import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import {Login} from './component/login/login';
import { AdminDashboard } from './component/admin-dashboard/admin-dashboard';


export const routes: Routes = [
    {path: '',component:Home},
    {path: 'login',component:Login},
    {path: 'admin-dashboard',component:AdminDashboard}
];
