import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppInventoryComponent } from './app-inventory.component';

describe('AppInventoryComponent', () => {
  let component: AppInventoryComponent;
  let fixture: ComponentFixture<AppInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInventoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
