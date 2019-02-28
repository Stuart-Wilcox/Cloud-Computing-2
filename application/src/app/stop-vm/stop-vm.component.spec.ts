import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopVmComponent } from './stop-vm.component';

describe('StopVmComponent', () => {
  let component: StopVmComponent;
  let fixture: ComponentFixture<StopVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
