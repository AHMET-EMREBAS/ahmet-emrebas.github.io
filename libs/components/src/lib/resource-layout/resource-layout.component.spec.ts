import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLayoutComponent } from './resource-layout.component';

describe('ResourceLayoutComponent', () => {
  let component: ResourceLayoutComponent;
  let fixture: ComponentFixture<ResourceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
