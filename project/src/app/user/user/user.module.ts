import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MentorsearchComponent } from '../mentorsearch/mentorsearch.component';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { PaymentComponent } from '../payment/payment.component';
import { MentorStatusComponent } from '../mentor-status/mentor-status.component';



@NgModule({
  declarations: [MentorsearchComponent,
  PaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"user/mentor_search",component:MentorsearchComponent},
      {path:"user/mentor_search/pay",component:PaymentComponent,canActivate:[AuthGuardService]},
      {path:'mentor_status/payment',component:PaymentComponent},
      {path:'mentor_status',component:MentorStatusComponent,
        children:[
          {path:'',redirectTo:'mentor_status',pathMatch:'full'},
          {path:'payment',component:PaymentComponent}
        ]
      
      }
      
      
    ])
  ]
})
export class UserModule { }
