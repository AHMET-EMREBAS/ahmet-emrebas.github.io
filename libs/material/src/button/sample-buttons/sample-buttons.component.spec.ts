import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleButtonsComponent } from './sample-buttons.component';

describe('SampleButtonsComponent', () => {
  let component: SampleButtonsComponent;
  let fixture: ComponentFixture<SampleButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
