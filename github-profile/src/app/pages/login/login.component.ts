import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  inLoginMode = true;

  isLoading = false;
  logo = 'https://img.icons8.com/ios-filled/50/000000/login-rounded-right.png';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {}
}
