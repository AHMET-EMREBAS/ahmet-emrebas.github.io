import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectManyInputComponent } from './select-many-input.component';

describe('SelectManyInputComponent', () => {
  let component: SelectManyInputComponent;
  let fixture: ComponentFixture<SelectManyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectManyInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectManyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
