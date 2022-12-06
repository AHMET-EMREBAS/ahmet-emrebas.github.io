import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOneInputComponent } from './select-one-input.component';

describe('SelectOneInputComponent', () => {
  let component: SelectOneInputComponent;
  let fixture: ComponentFixture<SelectOneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectOneInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectOneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
