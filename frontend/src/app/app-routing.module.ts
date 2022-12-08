import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/my_posts/posts.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:RegisterComponent},
  {path:"dash",component:DashboardComponent},
  {path:"post",component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
