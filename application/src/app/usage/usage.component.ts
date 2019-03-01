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
  private usage: any;
  public id: string;
  public loading: boolean;

  constructor(private route: ActivatedRoute, public usageService: UsageService) {
    this.id = '';
    this.usage = null;
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.usageService.getUsage(this.id).then(usage => {
        this.usage = usage;
        this.loading = false;
      });
    });
  }
}
