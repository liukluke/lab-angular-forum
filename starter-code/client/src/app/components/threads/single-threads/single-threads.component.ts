import { Component, OnInit } from '@angular/core';
import { ThreadsService } from './../../../services/threads.service';
import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-threads',
  templateUrl: './single-threads.component.html',
  styleUrls: ['./../../../styles/style.scss']
})
export class SingleThreadsComponent implements OnInit {
  thread: object;
  user: object;
  error: string;
  pageid: string;
  newReplyInput: object = {
    title: '',
    content: ''
  };
  constructor(
    private route: ActivatedRoute,
    private session: AuthService,
    private threadsService: ThreadsService
  ) { }

  ngOnInit(): void {
    this.session.isLoggedIn()
      .subscribe((user: object) => this.successCb(user), (err: string) => this.errorCb(err));
    this.route.params
      .subscribe(params => {
        this.getSigleThread(params['id'])
        this.pageid = params['id']
      }, (err: string) => this.error = err);
  }

  getSigleThread(id: any): void {
    this.threadsService.getSigleThread(id)
      .subscribe((thread: object) => this.thread = thread, (err: string) => this.error = err);
  }

  newReply(): void {
    this.threadsService.newReply(this.pageid, this.newReplyInput)
      .subscribe((thread: object) => {
        this.thread = thread;
        this.newReplyInput = {}
      }, (err: any) => this.error = err);
  }

  errorCb(err: string): void {
    this.error = err;
    this.user = null;
  }

  successCb(user: object): void {
    this.user = user;
    this.newReply['author'] = user;
    this.error = null;
  }

}


