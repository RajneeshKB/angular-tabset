import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFooterComponent } from './poc-footer.component';

describe('PocFooterComponent', () => {
  let component: PocFooterComponent;
  let fixture: ComponentFixture<PocFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
