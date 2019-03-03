import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UsageService } from '@services/usage.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  public loading: boolean;
  public error: Error;
  public id: string;
  private usage: any;

  constructor(private route: ActivatedRoute, public usageService: UsageService) {
    this.id = '';
    this.usage = null;
    this.error = null;
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.usageService.getUsage(this.id).then(usage => {
        this.usage = usage;
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.error = err;
      });
    });
  }
}
