import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { VMService } from '@services/vm.service';
import { VM } from '@models/VM';

@Component({
  selector: 'app-start-vm',
  templateUrl: './start-vm.component.html',
  styleUrls: ['./start-vm.component.css']
})
export class StartVmComponent implements OnInit {
  public loading: boolean;
  public error: Error;
  private vm: VM;
  public id: string;

  constructor(private route: ActivatedRoute, public vmService: VMService) {
    this.id = '';
    this.vm = null;
    this.error = null;
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.vmService.getVM(this.id).then(vm => {
        this.vm = vm
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.error = err;
      });
    });
  }

  startVM(){
    this.loading = true;
    this.vmService.startVM(this.id).then(() => {
      this.loading = false;
      // maybe redirect to url=`/view-vm/${this.id}`
    }).catch(err => {
      this.loading = false;
      this.error = err;
    });
  }
}
