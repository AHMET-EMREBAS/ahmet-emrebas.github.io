import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonButtonComponent } from './common-button.component';

describe('CommonButtonComponent', () => {
  let component: CommonButtonComponent;
  let fixture: ComponentFixture<CommonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
