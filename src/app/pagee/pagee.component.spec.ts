import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageeComponent } from './pagee.component';

describe('PageeComponent', () => {
  let component: PageeComponent;
  let fixture: ComponentFixture<PageeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
