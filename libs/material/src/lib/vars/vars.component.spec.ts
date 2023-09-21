import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VarsComponent } from './vars.component';

describe('VarsComponent', () => {
  let component: VarsComponent;
  let fixture: ComponentFixture<VarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
