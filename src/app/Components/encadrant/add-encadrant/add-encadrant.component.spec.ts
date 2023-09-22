import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncadrantComponent } from './add-encadrant.component';

describe('AddEncadrantComponent', () => {
  let component: AddEncadrantComponent;
  let fixture: ComponentFixture<AddEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncadrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
