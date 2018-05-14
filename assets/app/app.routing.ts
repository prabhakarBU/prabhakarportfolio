import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './portfolio/home.component';
import { AboutComponent } from './portfolio/about.component';

//import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
    { path: '' , redirectTo:'/home', pathMatch:'full' },
    { path: 'home' , component: HomeComponent },
    { path: 'about' , component: AboutComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);