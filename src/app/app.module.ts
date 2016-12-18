import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import appRoutes from './app.routes';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const routes = [
    {path: '', component:HomeComponent},
    {path: 'second', component:TodoComponent}
  ];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    TodoComponent
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
