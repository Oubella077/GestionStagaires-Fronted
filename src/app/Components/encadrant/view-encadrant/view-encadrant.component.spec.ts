import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncadrantComponent } from './view-encadrant.component';

describe('ViewEncadrantComponent', () => {
  let component: ViewEncadrantComponent;
  let fixture: ComponentFixture<ViewEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncadrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
