import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfirmIndexComponent } from './create-confirm-index.component';

describe('CreateConfirmIndexComponent', () => {
  let component: CreateConfirmIndexComponent;
  let fixture: ComponentFixture<CreateConfirmIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConfirmIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConfirmIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
