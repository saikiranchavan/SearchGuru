import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MentorsearchComponent } from './mentorsearch/mentorsearch.component';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { PaymentComponent } from './payment/payment.component';
import { MentorStatusComponent } from './mentor-status/mentor-status.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [MentorsearchComponent,
  PaymentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'register/user_register',component:RegisterComponent},
      {path:"user/mentor_search",component:MentorsearchComponent},
      {path:"user/mentor_search/pay",component:PaymentComponent,canActivate:[AuthGuardService]},
      {path:'mentor_status/payment',component:PaymentComponent,canActivate:[AuthGuardService]},
      {path:'mentor_status',component:MentorStatusComponent,
        children:[
          {path:'',redirectTo:'mentor_status',pathMatch:'full'},
          {path:'payment',component:PaymentComponent,canActivate:[AuthGuardService]}
        ]
      
      },
      
      
    ])
  ],
  providers: [AuthGuardService]
})
export class UserModule { }
