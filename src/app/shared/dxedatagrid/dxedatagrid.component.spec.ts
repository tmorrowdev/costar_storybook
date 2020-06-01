import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxedatagridComponent } from './dxedatagrid.component';

describe('DxedatagridComponent', () => {
  let component: DxedatagridComponent;
  let fixture: ComponentFixture<DxedatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxedatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxedatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
