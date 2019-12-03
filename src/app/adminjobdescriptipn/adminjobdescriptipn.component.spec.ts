import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjobdescriptipnComponent } from './adminjobdescriptipn.component';

describe('AdminjobdescriptipnComponent', () => {
  let component: AdminjobdescriptipnComponent;
  let fixture: ComponentFixture<AdminjobdescriptipnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminjobdescriptipnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminjobdescriptipnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
