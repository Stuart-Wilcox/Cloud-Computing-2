import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from  '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { VM } from '@models/VM';
import { VMService } from '@services/vm.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public vms: VM[];
  public loading: boolean;

  constructor(public vmService: VMService) {
    this.vms = [];
  }

  ngOnInit() {
    this.loading = true;
    this.vmService.getVMs().then(vms => {
      this.vms = vms;
      this.loading = false;
    });
  }
}
