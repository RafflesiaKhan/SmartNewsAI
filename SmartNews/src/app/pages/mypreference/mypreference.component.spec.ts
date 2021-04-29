import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypreferenceComponent } from './mypreference.component';

describe('MypreferenceComponent', () => {
  let component: MypreferenceComponent;
  let fixture: ComponentFixture<MypreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
