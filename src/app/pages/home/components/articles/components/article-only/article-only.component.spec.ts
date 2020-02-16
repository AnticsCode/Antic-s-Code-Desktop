import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOnlyComponent } from './article-only.component';

describe('ArticleOnlyComponent', () => {
  let component: ArticleOnlyComponent;
  let fixture: ComponentFixture<ArticleOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
