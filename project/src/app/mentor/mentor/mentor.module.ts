import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';



@NgModule({
  declarations: [MentorhomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'register/trainer_register',component:TrainerregisterComponent},
      {path:'mentorhome',component:MentorhomeComponent}
    ])
  ]
})
export class MentorModule { }
