import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombinedButtonComponent } from './combined-button.component';

describe('CombinedButtonComponent', () => {
  let component: CombinedButtonComponent;
  let fixture: ComponentFixture<CombinedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinedButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CombinedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
