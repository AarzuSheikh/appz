import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiryaniComponent } from './biryani.component';

describe('BiryaniComponent', () => {
  let component: BiryaniComponent;
  let fixture: ComponentFixture<BiryaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiryaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
