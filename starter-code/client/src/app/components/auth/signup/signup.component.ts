import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./../../../styles/style.scss']
})
export class SignupComponent implements OnInit {
  error: string;
  newSignupInput: Object = {
    username: '',
    email: '',
    password: ''
  };
  user: any;
  constructor(private session: AuthService,private router: Router) { }
  ngOnInit(): void { }
  signup(): void {
    this.session.signup(this.newSignupInput)
      .subscribe(() => {
        this.login();
        this.newSignupInput = {}
      },
        (err: any) => this.error = err
      );
  }
  login(): void {
    const newUser = { username: this.newSignupInput['username'], password: this.newSignupInput['password'] }
    this.session.login(newUser)
      .subscribe(
        (user: HttpClient) => {
          this.user = user;
          this.session.isUserLoggedIn.next(true);
          this.router.navigate(['']);
        },
        (err: any) => this.error = err
      );
  }
}
