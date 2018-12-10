import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTsComponent } from './intro-ts.component';

describe('IntroTsComponent', () => {
  let component: IntroTsComponent;
  let fixture: ComponentFixture<IntroTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
