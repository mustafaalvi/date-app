import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatchesComponent } from './components/home/subcomponents-home/matches/matches.component';
import { DiscoveryComponent } from './components/home/subcomponents-home/discovery/discovery.component';
import { MyProfileComponent } from './components/home/subcomponents-home/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ProfilesComponent,
    HomeComponent,
    NavComponent, 
    DiscoveryComponent,
    MatchesComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
    MatButtonModule, MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
