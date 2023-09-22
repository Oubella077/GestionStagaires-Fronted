import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeAbsentComponent } from './edite-absent.component';

describe('EditeAbsentComponent', () => {
  let component: EditeAbsentComponent;
  let fixture: ComponentFixture<EditeAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeAbsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
