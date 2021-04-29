import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsportalComponent } from './newsportal.component';

describe('NewsportalComponent', () => {
  let component: NewsportalComponent;
  let fixture: ComponentFixture<NewsportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
