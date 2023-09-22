import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAbsentComponent } from './view-absent.component';

describe('ViewAbsentComponent', () => {
  let component: ViewAbsentComponent;
  let fixture: ComponentFixture<ViewAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAbsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
