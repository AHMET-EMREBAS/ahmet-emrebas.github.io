import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputOptionComponent } from './input-option.component';

describe('InputOptionComponent', () => {
  let component: InputOptionComponent;
  let fixture: ComponentFixture<InputOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
