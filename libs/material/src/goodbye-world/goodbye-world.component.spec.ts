import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodbyeWorldComponent } from './goodbye-world.component';

describe('GoodbyeWorldComponent', () => {
  let component: GoodbyeWorldComponent;
  let fixture: ComponentFixture<GoodbyeWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodbyeWorldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodbyeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
