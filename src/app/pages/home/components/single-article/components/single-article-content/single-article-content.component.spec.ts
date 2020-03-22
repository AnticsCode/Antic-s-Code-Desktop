import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleContentComponent } from './single-article-content.component';

describe('SingleArticleContentComponent', () => {
  let component: SingleArticleContentComponent;
  let fixture: ComponentFixture<SingleArticleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
