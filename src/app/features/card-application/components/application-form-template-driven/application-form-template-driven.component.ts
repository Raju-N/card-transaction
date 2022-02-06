import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form-template-driven',
  templateUrl: './application-form-template-driven.component.html',
  styleUrls: ['./application-form-template-driven.component.scss'],
})
export class ApplicationFormTemplateDrivenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    if (form.valid) {
      // write a logic to call api
    }
    console.log(form.value);
  }
}
