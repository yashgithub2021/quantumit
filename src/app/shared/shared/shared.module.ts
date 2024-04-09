import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/components/form/form.component';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FormComponent]
})
export class SharedModule { }
