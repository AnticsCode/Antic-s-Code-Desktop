import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesIntroComponent } from './articles-intro.component';

describe('ArticlesIntroComponent', () => {
  let component: ArticlesIntroComponent;
  let fixture: ComponentFixture<ArticlesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
