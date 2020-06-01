import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxebuttonComponent } from './dxebutton.component';

describe('DxebuttonComponent', () => {
  let component: DxebuttonComponent;
  let fixture: ComponentFixture<DxebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
