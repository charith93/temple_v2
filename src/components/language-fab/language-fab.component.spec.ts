import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFabComponent } from './language-fab.component';

describe('LanguageFabComponent', () => {
  let component: LanguageFabComponent;
  let fixture: ComponentFixture<LanguageFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
