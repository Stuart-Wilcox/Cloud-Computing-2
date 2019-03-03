import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { VM } from '@models/VM';
import { VMService } from '@services/vm.service';

@Component({
  selector: 'app-create-vm',
  templateUrl: './create-vm.component.html',
  styleUrls: ['./create-vm.component.css']
})
export class CreateVmComponent implements OnInit {
  public loading: boolean;
  public error: Error;
  public name: string;
  public type: string;
  private vms: VM[];

  constructor(public vmService: VMService) {
    this.vms = [];
    this.error = null;
  }

  ngOnInit() {
    this.loading = true;
    this.vmService.getOfferings().then(vms => {
      this.loading = false;
      this.vms = vms;
    });
  }

  createVM(){
    this.loading = true;
    this.vmService.createVM(this.name, this.type).then(vm => {
      this.loading = false;
      // re-route to viewing the vm if you want to here, url=`/view-vm/${vm._id}`
    }).catch(err => {
      this.loading = false;
      this.error = err;
    });
  }
}
