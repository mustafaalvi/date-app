import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'messages', component: MessagesComponent},
  {path:'profile', component: ProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
