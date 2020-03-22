import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpIndexComponent } from './help-index.component';

describe('HelpIndexComponent', () => {
  let component: HelpIndexComponent;
  let fixture: ComponentFixture<HelpIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
