import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesIndexComponent } from './articles-index.component';

describe('ArticlesIndexComponent', () => {
  let component: ArticlesIndexComponent;
  let fixture: ComponentFixture<ArticlesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
