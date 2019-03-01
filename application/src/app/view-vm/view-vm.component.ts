import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

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

  constructor(private route: ActivatedRoute, public vmService: VMService) {
    this.id = '';
    this.vm = null;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.vmService.getVM(this.id).then(vm => this.vm = vm);
    });
  }
}
