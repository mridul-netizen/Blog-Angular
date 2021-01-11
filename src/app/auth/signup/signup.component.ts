import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;

  // tslint:disable-next-line:typedef
  onSignUp(form: NgForm) {
    console.log(form.value);
  }
}
