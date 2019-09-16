import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThreadsComponent } from './new-threads.component';

describe('NewThreadsComponent', () => {
  let component: NewThreadsComponent;
  let fixture: ComponentFixture<NewThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
