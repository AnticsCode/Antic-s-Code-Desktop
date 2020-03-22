import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIndexComponent } from './hero-index.component';

describe('HeroIndexComponent', () => {
  let component: HeroIndexComponent;
  let fixture: ComponentFixture<HeroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
