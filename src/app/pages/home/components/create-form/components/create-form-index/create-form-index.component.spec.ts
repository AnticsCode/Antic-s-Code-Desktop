import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormIndexComponent } from './create-form-index.component';

describe('CreateFormIndexComponent', () => {
  let component: CreateFormIndexComponent;
  let fixture: ComponentFixture<CreateFormIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
