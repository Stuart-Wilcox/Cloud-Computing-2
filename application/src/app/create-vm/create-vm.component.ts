import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material';

import { VM } from '@models/VM';
import { VMService } from '@services/vm.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, public vmService: VMService, private snackBar: MatSnackBar) {
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
    if(this.name && this.type){
      this.loading = true;
      this.vmService.createVM(this.name, this.type).then(vm => {
        this.loading = false;
        this.snackBar.open("VM Created Successfully.", '', {duration: 1000});
        this.name = null;
        this.type = null;
        this.router.navigate(['/dashboard']);
      }).catch(err => {
        this.loading = false;
        this.snackBar.open("VM Creation Failed.", '', {duration: 1000});
        this.error = err;
      });
    } else {
      this.snackBar.open("Ensure all the fields are filled.", '', {duration: 1000});
    }
  }
}
