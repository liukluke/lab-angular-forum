import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { ThreadsService } from './../../../services/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-threads',
  templateUrl: './new-threads.component.html',
  styleUrls: ['./../../../styles/style.scss']
})
export class NewThreadsComponent implements OnInit {
  user: object;
  error: string;
  newThreadInput: Object = {
    title: '',
    content: ''
  };
  constructor(
    private session: AuthService,
    private threadsService: ThreadsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe((user: any) => this.successCb(user), (err: any) => this.errorCb(err));
  }

  errorCb(err: any): void {
    this.error = err;
    this.user = null;
    this.router.navigate(['login']);
  }

  successCb(user: any): void {
    this.user = user;
    this.error = null;
  }

  newThread(): void {
    this.threadsService.newThread(this.newThreadInput)
      .subscribe(() => this.router.navigate(['']), (err: any) => this.error = err);
  }

}
