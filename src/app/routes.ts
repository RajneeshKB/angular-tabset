import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PocHomeComponent } from './poc-home/poc-home.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { UserAdditionComponent } from './user-addition/user-addition.component';

export const routeConfig: Routes = [
    // { path: 'POC-home', component: PocHomeComponent },
    { path: 'user-validation', component: UserValidationComponent, outlet: 'valid'},
    { path: 'user-addition', component:UserAdditionComponent, outlet: 'add'},
    // { path: '', redirectTo: '/POC-home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
