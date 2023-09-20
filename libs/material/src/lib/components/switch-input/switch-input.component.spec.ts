import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchInputComponent } from './switch-input.component';

describe('SwitchInputComponent', () => {
  let component: SwitchInputComponent;
  let fixture: ComponentFixture<SwitchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
