import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MainComponent } from './Components/Main/main/main.component';
import { App1Component } from './Components/Main/app1/app1.component';
import { App2Component } from './Components/Main/app2/app2.component';
import { App3Component } from './Components/Main/app3/app3.component';
import { Four0fourComponent } from './Components/Error/four0four/four0four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    App1Component,
    App2Component,
    App3Component,
    Four0fourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
