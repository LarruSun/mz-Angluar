import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MzFilmComponent } from './mz-film.component';

describe('MzFilmComponent', () => {
  let component: MzFilmComponent;
  let fixture: ComponentFixture<MzFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MzFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MzFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
