import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdcoffeeComponent } from './coldcoffee.component';

describe('ColdcoffeeComponent', () => {
  let component: ColdcoffeeComponent;
  let fixture: ComponentFixture<ColdcoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdcoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
