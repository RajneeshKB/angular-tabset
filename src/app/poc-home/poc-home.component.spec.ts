import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocHomeComponent } from './poc-home.component';

describe('PocHomeComponent', () => {
  let component: PocHomeComponent;
  let fixture: ComponentFixture<PocHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
