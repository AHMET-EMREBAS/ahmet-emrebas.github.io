import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOneInputComponent } from './search-one-input.component';

describe('SearchOneInputComponent', () => {
  let component: SearchOneInputComponent;
  let fixture: ComponentFixture<SearchOneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchOneInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchOneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
