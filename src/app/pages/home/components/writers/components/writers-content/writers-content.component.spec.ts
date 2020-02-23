import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersContentComponent } from './writers-content.component';

describe('WritersContentComponent', () => {
  let component: WritersContentComponent;
  let fixture: ComponentFixture<WritersContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
