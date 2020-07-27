import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '@auth/services/auth.service'

/**
* Login Component
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  loginError = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    if(this.authService.login(this.f.login.value, this.f.password.value)){
      this.loginError = false;
    }
    else {
      this.loginError = true;
    }
  }

}
