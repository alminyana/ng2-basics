import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import appRoutes from './app.routes';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';


const routes = [
    {path: '', component:HomeComponent},
    {path: 'second', component:SecondComponent}
  ];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
