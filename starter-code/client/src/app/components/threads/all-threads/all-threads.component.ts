import { Component, OnInit } from '@angular/core';
import { ThreadsService } from './../../../services/threads.service';

@Component({
  selector: 'app-all-threads',
  templateUrl: './all-threads.component.html',
  styleUrls: ['./../../../styles/style.scss']
})
export class AllThreadsComponent implements OnInit {
  threads: Array<Object>
  error: string;
  constructor(private threadsService: ThreadsService) { }

  ngOnInit(): void {
    this.threadsService.getThreads()
      .subscribe((threads: Array<Object>) => this.threads = threads, (err: string) => this.error = err);
  }
}

