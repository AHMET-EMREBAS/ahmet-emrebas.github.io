import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchManyInputComponent } from './search-many-input.component';

describe('SearchManyInputComponent', () => {
  let component: SearchManyInputComponent;
  let fixture: ComponentFixture<SearchManyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchManyInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchManyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
