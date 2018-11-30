import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersViewComponent } from './folders-view.component';

describe('FoldersViewComponent', () => {
  let component: FoldersViewComponent;
  let fixture: ComponentFixture<FoldersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
