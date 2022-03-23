import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    SeriesComponent,
    LoginComponent,
    PeliculasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    PeliculasComponent,
    SeriesComponent,
    LoginComponent
  ]
})
export class RoutesModule { }
