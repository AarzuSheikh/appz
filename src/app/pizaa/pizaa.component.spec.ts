import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizaaComponent } from './pizaa.component';

describe('PizaaComponent', () => {
  let component: PizaaComponent;
  let fixture: ComponentFixture<PizaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
