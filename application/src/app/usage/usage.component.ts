import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UsageService } from '@services/usage.service';
import { VMService } from '@services/vm.service';
import { VM } from '@models/VM';


@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  private vm: VM;
  public loading: boolean;
  public error: Error;
  public id: string;
  private usage: any;

  constructor(private route: ActivatedRoute, public usageService: UsageService, public vmService: VMService) {
    this.id = '';
    this.vm = null;
    this.usage = null;
    this.error = null;
  }

  ngOnInit() {
    this.loading = true;

    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.vmService.getVM(this.id).then(vm => {
        this.vm = vm;
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.error = err;
      });

      // Using vmService since UsageService doesnt seem to be implemented
      this.vmService.getUsage(this.id).then(usage => {
        this.usage = usage;
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.error = err;
      });

    });
  }
}
