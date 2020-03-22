import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormTabSubmitComponent } from './create-form-tab-submit.component';

describe('CreateFormTabSubmitComponent', () => {
  let component: CreateFormTabSubmitComponent;
  let fixture: ComponentFixture<CreateFormTabSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormTabSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormTabSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
