import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TruncateAtPointPipe } from '../pipes/truncate-at-point.pipe';



@NgModule({
  declarations: [
    TruncateAtPointPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule.forRoot({ type: 'ball-running-dots' }),
  
  ],
  exports: [TruncateAtPointPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
