import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesAppComponent } from './timelines-app.component';

describe('TimelinesAppComponent', () => {
  let component: TimelinesAppComponent;
  let fixture: ComponentFixture<TimelinesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinesAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
