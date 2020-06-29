import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './home/characters/characters.component';
import { AuthGaurdService } from "./shared/auth-gaurd.service";
import { ViewCharacterComponent } from './home/view-character/view-character.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path : 'characters', component : CharactersComponent,
   canActivate:[AuthGaurdService]},
    {path:'characters/:id', 
    component: ViewCharacterComponent,
    canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
