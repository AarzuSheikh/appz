import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormblComponent } from './formbl.component';

describe('FormblComponent', () => {
  let component: FormblComponent;
  let fixture: ComponentFixture<FormblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
