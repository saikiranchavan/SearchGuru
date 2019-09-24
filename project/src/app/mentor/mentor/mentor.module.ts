import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'register/trainer_register',component:TrainerregisterComponent},
    ])
  ]
})
export class MentorModule { }
