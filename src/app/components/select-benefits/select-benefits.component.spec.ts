import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBenefitsComponent } from './select-benefits.component';

describe('SelectBenefitsComponent', () => {
  let component: SelectBenefitsComponent;
  let fixture: ComponentFixture<SelectBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBenefitsComponent]
    });
    fixture = TestBed.createComponent(SelectBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
