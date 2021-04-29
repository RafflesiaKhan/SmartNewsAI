import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatinginputsComponent } from './ratinginputs.component';

describe('RatinginputsComponent', () => {
  let component: RatinginputsComponent;
  let fixture: ComponentFixture<RatinginputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatinginputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatinginputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
