import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleIndexComponent } from './single-article-index.component';

describe('SingleArticleIndexComponent', () => {
  let component: SingleArticleIndexComponent;
  let fixture: ComponentFixture<SingleArticleIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
