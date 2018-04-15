import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MzHomeComponent } from './mz-home.component';

describe('MzHomeComponent', () => {
  let component: MzHomeComponent;
  let fixture: ComponentFixture<MzHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MzHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MzHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
