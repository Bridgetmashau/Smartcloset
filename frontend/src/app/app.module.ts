
//============================modules================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





//============================components============================
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostsComponent } from './components/my_posts/posts.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent ,
    DashboardComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
