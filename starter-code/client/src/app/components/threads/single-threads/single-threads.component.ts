import { Component, OnInit } from '@angular/core';
import { ThreadsService } from './../../../services/threads.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-threads',
  templateUrl: './single-threads.component.html',
  styleUrls: ['./../../../styles/style.scss']
})
export class SingleThreadsComponent implements OnInit {
  thread: object;
  error: string;
  constructor(
    private route: ActivatedRoute,
    private threadsService: ThreadsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getSigleThread(params['id']), (err: string) => this.error = err);
  }

  getSigleThread(id: any): void {
    this.threadsService.getSigleThread(id)
      .subscribe((thread: object) => this.thread = thread, (err: string) => this.error = err);
  }

}
