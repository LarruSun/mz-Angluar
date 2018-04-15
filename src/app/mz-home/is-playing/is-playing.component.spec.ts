import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsPlayingComponent } from './is-playing.component';

describe('IsPlayingComponent', () => {
  let component: IsPlayingComponent;
  let fixture: ComponentFixture<IsPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
