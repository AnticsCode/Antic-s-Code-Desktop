import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfirmContentComponent } from './create-confirm-content.component';

describe('CreateConfirmContentComponent', () => {
  let component: CreateConfirmContentComponent;
  let fixture: ComponentFixture<CreateConfirmContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConfirmContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConfirmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
