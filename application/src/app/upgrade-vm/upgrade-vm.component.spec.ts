import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeVmComponent } from './upgrade-vm.component';

describe('UpgradeVmComponent', () => {
  let component: UpgradeVmComponent;
  let fixture: ComponentFixture<UpgradeVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
