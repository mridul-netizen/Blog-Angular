import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;

  // tslint:disable-next-line:typedef
  onLogin(form: NgForm) {
    console.log(form.value);
  }
}
