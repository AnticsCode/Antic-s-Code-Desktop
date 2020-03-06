import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormTabIntroComponent } from './create-form-tab-intro.component';

describe('CreateFormTabIntroComponent', () => {
  let component: CreateFormTabIntroComponent;
  let fixture: ComponentFixture<CreateFormTabIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormTabIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormTabIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
