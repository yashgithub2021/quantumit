import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  visibleForm = 'project'
  form!: FormGroup;
  joinform!: FormGroup;
  isDarkTheme!: boolean
  constructor(private formBuilder: FormBuilder, private api: ApiService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      message: ['', Validators.required],
      about: ['', Validators.required],
      ip_address: [''],
      location: ['']
    });

    this.joinform = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      resume: ['', [Validators.required]],
      message: ['', Validators.required]
    });

    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.getIpAndLocation();
  }
  getIpAndLocation(): void {
    this.api.getIpAddress().subscribe(ipData => {
      this.form.patchValue({ ip_address: ipData.ip });
      console.log(ipData);

      this.api.getLocation(ipData).subscribe(locationData => {
        const location = `${locationData.city}, ${locationData.region}, ${locationData.country}`;
        this.form.patchValue({ location });
        console.log(location);
      });
    });
    console.log(this.form);
  }
  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  changeForm(form: string) {
    this.visibleForm = form
  }
  submitForm() {
    // Create a new FormData object
    const formData = new FormData();

    // Append form values to the FormData object
    formData.append('firstName', this.form.value.firstName);
    formData.append('lastName', this.form.value.lastName);
    formData.append('email', this.form.value.email);
    formData.append('companyName', this.form.value.companyName);
    formData.append('message', this.form.value.message);
    formData.append('about', this.form.value.about);
    formData.append('ip_address', this.form.value.ip_address);
    formData.append('location', this.form.value.location);

    // Send the FormData to the backend using an HTTP POST request
    this.api.saveContactForm(formData).subscribe((res: any) => {
      console.log("Response from backend:", res);
      this.toast.success(res.message)
      this.form.reset()
    }, (err: any) => {
      console.log(err.error)
      this.toast.error(err.error.message)
    });
  }
  submitJoinForm() {
    // Create a new FormData object
    const formData = new FormData();

    // Append form values to the FormData object
    formData.append('firstName', this.joinform.value.firstName);
    formData.append('lastName', this.joinform.value.lastName);
    formData.append('email', this.joinform.value.email);
    formData.append('message', this.joinform.value.message);
    formData.append('resume', this.joinform.value.resume);

    // Send the FormData to the backend using an HTTP POST request
    this.api.saveContactForm(formData).subscribe((res: any) => {
      console.log("Response from backend:", res.message);
      this.toast.success(res.message)
      this.joinform.reset()
    }, (err: any) => {
      console.log(err.error)
      this.toast.error(err.error)
    });
  }

}
