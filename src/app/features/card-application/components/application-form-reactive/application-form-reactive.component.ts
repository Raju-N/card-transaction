import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidator } from './custom.validator';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncValidator } from './async.validator';

@Component({
  selector: 'app-application-form-reactive',
  templateUrl: './application-form-reactive.component.html',
  styleUrls: ['./application-form-reactive.component.scss'],
})
export class ApplicationFormReactiveComponent implements OnInit {
  // form: FormGroup = new FormGroup({
  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(2),
  //     Validators.pattern('[a-zA-Z ]*'),
  //   ]),
  //   email: new FormControl(),
  //   phoneNumber: new FormControl('', CustomValidator.validMobile(/([6-9])+/)),
  //   description: new FormControl(),
  //   cardType: new FormGroup({
  //     creditCard: new FormControl(),
  //     debitCard: new FormControl(),
  //     corporateCard: new FormControl(),
  //   }),
  //   gender: new FormControl('female'),
  //   state: new FormControl('TN'),
  //   assets: new FormArray([]),
  // });

  form: FormGroup;

  get username() {
    return this.form.get('username');
  }

  get assets() {
    return this.form.get('assets') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.form
      .get('username')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val.length > 2)
      )
      .subscribe((res) => console.log(res));
  }

  buildForm(): FormGroup {
    return this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      email: [],
      phoneNumber: [
        '',
        CustomValidator.validMobile(/([6-9])+/),
        AsyncValidator.phoneNumberExists,
      ],
      description: [],
      cardType: this.fb.group({
        creditCard: [],
        debitCard: [],
        corporateCard: [],
      }),
      gender: ['female'],
      state: ['TN'],
      assets: this.fb.array([]),
    });
  }

  onAddAsset(el: HTMLInputElement) {
    this.assets.push(new FormControl(el.value));
    el.value = '';
  }

  onAssetRemove(control: AbstractControl) {
    const controlIndex = this.assets.controls.indexOf(control);
    this.assets.removeAt(controlIndex);
  }

  onCorporateCardSelect(el: HTMLInputElement) {
    if (el.checked) {
      const ctrl = new FormControl('', Validators.required);
      this.form.addControl('company', ctrl);
    } else {
      this.form.removeControl('company');
    }
  }

  onSetValue() {
    this.form.setValue({
      username: 'Test user',
      email: 'example@gmail.com',
      phoneNumber: '',
      description: null,
      cardType: {
        creditCard: true,
        debitCard: null,
        corporateCard: null,
      },
      gender: 'male',
      state: 'TN',
      assets: [],
    });
  }

  onPatchValue() {
    this.form.patchValue({ email: 'example@gmail.com' });
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
