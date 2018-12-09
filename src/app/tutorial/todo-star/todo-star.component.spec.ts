import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStarComponent } from './todo-star.component';

describe('TodoStarComponent', () => {
  let component: TodoStarComponent;
  let fixture: ComponentFixture<TodoStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
