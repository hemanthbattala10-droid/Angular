import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Profile } from './profile/profile';
import { Token } from './token/token';
import { AuthGuard } from './auth.guard';
import { OktaCallbackComponent } from '@okta/okta-angular';


export const routes: Routes = [
    { path: 'welcome', component: Welcome },
    {path: 'login', component: Login },
    {path: 'logout', component: Logout },
    {path: 'profile', component: Profile, canActivate: [AuthGuard] },
    {path: 'token', component: Token, canActivate: [AuthGuard] },
    {path: 'login/callback', component: OktaCallbackComponent },
     {path:'token', component: Token },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

 