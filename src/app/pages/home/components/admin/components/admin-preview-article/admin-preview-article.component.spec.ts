import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreviewArticleComponent } from './admin-preview-article.component';

describe('AdminPreviewArticleComponent', () => {
  let component: AdminPreviewArticleComponent;
  let fixture: ComponentFixture<AdminPreviewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPreviewArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPreviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
