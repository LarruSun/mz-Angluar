import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAdComponent } from './scroll-ad.component';

describe('ScrollAdComponent', () => {
  let component: ScrollAdComponent;
  let fixture: ComponentFixture<ScrollAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
