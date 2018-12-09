import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDayComponent } from './todo-day.component';

describe('TodoDayComponent', () => {
  let component: TodoDayComponent;
  let fixture: ComponentFixture<TodoDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
