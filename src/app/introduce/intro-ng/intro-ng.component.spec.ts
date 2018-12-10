import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNgComponent } from './intro-ng.component';

describe('IntroNgComponent', () => {
  let component: IntroNgComponent;
  let fixture: ComponentFixture<IntroNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
