import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VMService } from '@services/vm.service';
import { VM } from '@models/VM';

@Component({
  selector: 'app-delete-vm',
  templateUrl: './delete-vm.component.html',
  styleUrls: ['./delete-vm.component.css']
})
export class DeleteVmComponent implements OnInit {
  private vm: VM;
  public id: string;
  public loading: boolean;

  constructor(private route: ActivatedRoute, public vmService: VMService) {
    this.id = '';
    this.vm = null;
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.vmService.getVM(this.id).then(vm => {
        this.vm = vm
        this.loading = false;
      });
    });
  }
}
