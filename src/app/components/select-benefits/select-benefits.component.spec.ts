import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBenefictsComponent } from './select-benefits.component';

describe('SelectBenefictsComponent', () => {
  let component: SelectBenefictsComponent;
  let fixture: ComponentFixture<SelectBenefictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBenefictsComponent]
    });
    fixture = TestBed.createComponent(SelectBenefictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
