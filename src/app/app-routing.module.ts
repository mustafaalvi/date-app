import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { HomeComponent } from './components/home/home.component';
import { DiscoveryComponent } from './components/home/subcomponents-home/discovery/discovery.component';
import { MyProfileComponent } from './components/home/subcomponents-home/my-profile/my-profile.component';
import { MatchesComponent } from './components/home/subcomponents-home/matches/matches.component';
import { CardComponent } from './components/common/card/card.component';

const routes: Routes = [
  {path:'', component: CardComponent},
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: '', component: DiscoveryComponent }, // Redirect to 'discovery' by default
      { path: 'discovery', component: DiscoveryComponent },
      { path: 'my-profile', component: MyProfileComponent }, // Corrected path to 'my-profile'
      { path: 'matches', component: MatchesComponent }
    ]
  },
  {path:'messages', component: MessagesComponent},
  {path:'profile', component: ProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
