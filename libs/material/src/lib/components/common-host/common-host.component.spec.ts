import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonHostComponent } from './common-host.component';

describe('CommonHostComponent', () => {
  let component: CommonHostComponent;
  let fixture: ComponentFixture<CommonHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
