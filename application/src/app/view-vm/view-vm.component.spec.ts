import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVmComponent } from './view-vm.component';

describe('ViewVmComponent', () => {
  let component: ViewVmComponent;
  let fixture: ComponentFixture<ViewVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
