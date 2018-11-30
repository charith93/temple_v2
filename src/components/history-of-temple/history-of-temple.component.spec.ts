import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfTempleComponent } from './history-of-temple.component';

describe('HistoryOfTempleComponent', () => {
  let component: HistoryOfTempleComponent;
  let fixture: ComponentFixture<HistoryOfTempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfTempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
