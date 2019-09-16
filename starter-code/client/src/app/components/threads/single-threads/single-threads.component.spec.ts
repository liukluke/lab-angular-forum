import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleThreadsComponent } from './single-threads.component';

describe('SingleThreadsComponent', () => {
  let component: SingleThreadsComponent;
  let fixture: ComponentFixture<SingleThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
