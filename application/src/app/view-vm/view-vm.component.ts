import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

import { VMService } from '@services/vm.service';
import { VM } from '@models/VM';

@Component({
  selector: 'app-view-vm',
  templateUrl: './view-vm.component.html',
  styleUrls: ['./view-vm.component.css']
})
export class ViewVmComponent implements OnInit {
  private vm: VM;
  public id: string;
  public loading: boolean;

  constructor(private route: ActivatedRoute, public vmService: VMService, private snackBar: MatSnackBar, private router: Router) {
    this.id = '';
    this.vm = null;
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.vmService.getVM(this.id).then(vm => {
        this.vm = vm;
        this.loading = false;
      });
    });
  }

  deleteVM() {
    this.vmService.deleteVM(this.id).then((res) => {
      this.snackBar.open("VM Deleted Successfully.", '', {duration: 1000});
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      this.snackBar.open("Error. VM Deletion Failed.", '', {duration: 1000});
    });
  }

  upgradeVM(){
    this.vmService.upgradeVM(this.id).then((vm) => {
      this.snackBar.open("VM Upgraded Successfully.", '', {duration: 1000});
      this.vm = vm;
    }).catch(err => {
      this.snackBar.open("Error. VM Upgrade Failed.", '', {duration: 1000});
    });
  }

  downgradeVM(){
    this.vmService.downgradeVM(this.id).then((vm) => {
      this.snackBar.open("VM Downgraded Successfully.", '', {duration: 1000});
      this.vm = vm;
    }).catch(err => {
      this.snackBar.open("Error. VM Downgrade Failed.", '', {duration: 1000});
    });
  }


  startVM(){
    this.vmService.startVM(this.id).then((vm) => {
      this.snackBar.open("VM started Successfully.", '', {duration: 1000});
      this.vm = vm;
    }).catch(err => {
      this.snackBar.open("Error. VM start Failed.", '', {duration: 1000});
    });
  }

  stopVM(){
    this.vmService.stopVM(this.id).then((vm) => {
      this.snackBar.open("VM stopped Successfully.", '', {duration: 1000});
      this.vm = vm;
    }).catch(err => {
      this.snackBar.open("Error. VM stop Failed.", '', {duration: 1000});
    });
  }
}
