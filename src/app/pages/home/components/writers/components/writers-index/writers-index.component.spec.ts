import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersIndexComponent } from './writers-index.component';

describe('WritersIndexComponent', () => {
  let component: WritersIndexComponent;
  let fixture: ComponentFixture<WritersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
