import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'adminhome',component:AdminComponent}
    ])
    
  ]
})
export class AdminModule { }
