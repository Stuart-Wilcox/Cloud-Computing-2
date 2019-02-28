import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartVmComponent } from './start-vm.component';

describe('StartVmComponent', () => {
  let component: StartVmComponent;
  let fixture: ComponentFixture<StartVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
