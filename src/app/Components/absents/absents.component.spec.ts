import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentsComponent } from './absents.component';

describe('AbsentsComponent', () => {
  let component: AbsentsComponent;
  let fixture: ComponentFixture<AbsentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
