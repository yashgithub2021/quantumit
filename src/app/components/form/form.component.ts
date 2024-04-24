import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  visibleForm = 'project'

  changeForm(form: string) {
    this.visibleForm = form
  }
}
