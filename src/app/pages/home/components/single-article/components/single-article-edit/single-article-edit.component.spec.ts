import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleEditComponent } from './single-article-edit.component';

describe('SingleArticleEditComponent', () => {
  let component: SingleArticleEditComponent;
  let fixture: ComponentFixture<SingleArticleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
