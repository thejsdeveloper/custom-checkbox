import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-radio';

  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      selection: ['option 1', Validators.required]
    });
  }

  submit(values: any) {
    console.log(values);
    // console.log('valid', this.form.valid);
    // console.log('touched', this.form.touched);
  }

}
