import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableHeaderLessComponent } from './expandable-header-less.component';

describe('ExpandableHeaderLessComponent', () => {
  let component: ExpandableHeaderLessComponent;
  let fixture: ComponentFixture<ExpandableHeaderLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableHeaderLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableHeaderLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
