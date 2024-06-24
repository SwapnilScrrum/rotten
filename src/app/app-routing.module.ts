import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import { HomeComponent } from './component/home/home.component';
import { MovieComponent } from './component/movie/movie.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  { path: 'movie/:type/:id', component: MovieComponent },
    {path:'**',component:LogInComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
