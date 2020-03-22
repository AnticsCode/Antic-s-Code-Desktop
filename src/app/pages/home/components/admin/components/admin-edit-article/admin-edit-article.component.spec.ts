import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditArticleComponent } from './admin-edit-article.component';

describe('AdminEditArticleComponent', () => {
  let component: AdminEditArticleComponent;
  let fixture: ComponentFixture<AdminEditArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
