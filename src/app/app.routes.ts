import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import {Login} from './component/login/login';

export const routes: Routes = [
    {path: '',component:Home},
    {path: 'login',component:Login},
];
