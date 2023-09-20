import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavListItemComponent } from './nav-list-item.component';

describe('NavListItemComponent', () => {
  let component: NavListItemComponent;
  let fixture: ComponentFixture<NavListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
