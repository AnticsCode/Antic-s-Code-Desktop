import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDraftComponent } from './load-draft.component';

describe('LoadDraftComponent', () => {
  let component: LoadDraftComponent;
  let fixture: ComponentFixture<LoadDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
