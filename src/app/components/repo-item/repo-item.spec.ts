import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoItem } from './repo-item';

describe('RepoItem', () => {
  let component: RepoItem;
  let fixture: ComponentFixture<RepoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
