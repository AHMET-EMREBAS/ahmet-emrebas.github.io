import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavToggleComponent } from './sidenav-toggle.component';

describe('SidenavToggleComponent', () => {
  let component: SidenavToggleComponent;
  let fixture: ComponentFixture<SidenavToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
