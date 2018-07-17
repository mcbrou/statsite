import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloggerpageComponent } from './dataloggerpage.component';

describe('DataloggerpageComponent', () => {
  let component: DataloggerpageComponent;
  let fixture: ComponentFixture<DataloggerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataloggerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataloggerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
