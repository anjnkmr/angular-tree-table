import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableFixedVisibilityComponent } from './expandable-fixed-visibility.component';

describe('ExpandableFixedVisibilityComponent', () => {
  let component: ExpandableFixedVisibilityComponent;
  let fixture: ComponentFixture<ExpandableFixedVisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableFixedVisibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableFixedVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
