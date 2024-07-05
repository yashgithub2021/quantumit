import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rozorpay',
  templateUrl: './rozorpay.component.html',
  styleUrls: ['./rozorpay.component.css']
})
export class RozorpayComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', Validators.required],
      city: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      state: ['', [Validators.required,,Validators.pattern('^[a-zA-Z ]+$')]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      country: ['', [Validators.required,,Validators.pattern('^[a-zA-Z ]+$')]],
      currencyType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
