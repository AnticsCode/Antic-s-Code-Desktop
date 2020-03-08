import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentDraftCardComponent } from './admin-content-draft-card.component';

describe('AdminContentDraftCardComponent', () => {
  let component: AdminContentDraftCardComponent;
  let fixture: ComponentFixture<AdminContentDraftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentDraftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentDraftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
