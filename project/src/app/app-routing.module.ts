import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Registerfolder/register/register.component';
import { TrainerregisterComponent } from './Registerfolder/trainerregister/trainerregister.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MentorsearchComponent } from './user/mentorsearch/mentorsearch.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register/user_register',component:RegisterComponent},
  {path:'register/trainer_register',component:TrainerregisterComponent},
  {path:'user/mentor_search',component:MentorsearchComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
