import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingPlayComponent } from './coming-play.component';

describe('ComingPlayComponent', () => {
  let component: ComingPlayComponent;
  let fixture: ComponentFixture<ComingPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
