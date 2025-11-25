import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import {Login} from './component/login/login';
import { AdminDashboard } from './component/admin-dashboard/admin-dashboard';
import { CreateNewEmp } from './component/create-new-emp/create-new-emp';
import { ViewAllUsers } from './component/view-all-users/view-all-users';

export const routes: Routes = [
    {path: '',component:Home},
    {path: 'login',component:Login},
    {path: 'admin-dashboard',
        component:AdminDashboard,
        children:[
           {path:'view-all-users',component:ViewAllUsers},
            {path:'create-new-emp',component:CreateNewEmp}
        ]
    },
];
