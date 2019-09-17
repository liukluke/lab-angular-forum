import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../../styles/style.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  newLoginInput: Object = {
    username: '',
    password: ''
  };
  user: Object;
  constructor(private session: AuthService, private router: Router) { }
  ngOnInit() { }
  login(): void {
    this.session.login(this.newLoginInput)
      .subscribe(
        (user: HttpClient) => {
          this.user = user;
          this.session.isUserLoggedIn.next(true);
          this.newLoginInput = {};
          this.router.navigate(['']);
        },
        (err: any) => this.error = err
      );
  }
}
