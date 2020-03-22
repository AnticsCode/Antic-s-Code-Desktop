import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormContentComponent } from './create-form-content.component';

describe('CreateFormContentComponent', () => {
  let component: CreateFormContentComponent;
  let fixture: ComponentFixture<CreateFormContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
