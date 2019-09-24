import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { TrainerregisterComponent } from './mentor/mentor/trainerregister/trainerregister.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardService } from './auth-guard.service';
import { UserModule } from './user/user.module';
import { MentorStatusComponent } from './user/mentor-status/mentor-status.component';
//import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TrainerregisterComponent,
    NotfoundComponent,
    MentorStatusComponent
    
    
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
