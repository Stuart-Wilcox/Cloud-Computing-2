import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVmComponent } from './delete-vm.component';

describe('DeleteVmComponent', () => {
  let component: DeleteVmComponent;
  let fixture: ComponentFixture<DeleteVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
