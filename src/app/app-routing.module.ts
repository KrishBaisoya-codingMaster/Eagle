import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { MainComponent } from './Components/Main/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
 { path: 'Home', component: HomeComponent },
 { path: 'Main', component: MainComponent },

 { path: 'About', component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
