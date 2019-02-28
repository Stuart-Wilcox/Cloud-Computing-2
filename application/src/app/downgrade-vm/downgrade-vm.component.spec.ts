import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowngradeVmComponent } from './downgrade-vm.component';

describe('DowngradeVmComponent', () => {
  let component: DowngradeVmComponent;
  let fixture: ComponentFixture<DowngradeVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowngradeVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowngradeVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
