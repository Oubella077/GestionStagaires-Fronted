import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbsentComponent } from './add-absent.component';

describe('AddAbsentComponent', () => {
  let component: AddAbsentComponent;
  let fixture: ComponentFixture<AddAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAbsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
