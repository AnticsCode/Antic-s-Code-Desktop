import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentDraftListComponent } from './admin-content-draft-list.component';

describe('AdminContentDraftListComponent', () => {
  let component: AdminContentDraftListComponent;
  let fixture: ComponentFixture<AdminContentDraftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentDraftListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentDraftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
