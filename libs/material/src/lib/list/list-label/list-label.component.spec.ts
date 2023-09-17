import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLabelComponent } from './list-label.component';

describe('ListLabelComponent', () => {
  let component: ListLabelComponent;
  let fixture: ComponentFixture<ListLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
