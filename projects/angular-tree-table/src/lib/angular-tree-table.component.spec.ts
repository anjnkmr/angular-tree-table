import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTreeTableComponent } from './angular-tree-table.component';

describe('AngularTreeTableComponent', () => {
  let component: AngularTreeTableComponent;
  let fixture: ComponentFixture<AngularTreeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTreeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
