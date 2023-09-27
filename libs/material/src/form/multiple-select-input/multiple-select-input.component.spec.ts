import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleSelectInputComponent } from './multiple-select-input.component';

describe('MultipleSelectInputComponent', () => {
  let component: MultipleSelectInputComponent;
  let fixture: ComponentFixture<MultipleSelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSelectInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
