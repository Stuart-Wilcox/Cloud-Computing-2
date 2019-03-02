import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material';

import { VM } from '@models/VM';
import { VMService } from '@services/vm.service';

@Component({
  selector: 'app-create-vm',
  templateUrl: './create-vm.component.html',
  styleUrls: ['./create-vm.component.css']
})
export class CreateVmComponent implements OnInit {
  private vms = [ VM.getBasicInstance('0', ''), VM.getLargeInstance('0', ''), VM.getUltraLargeInstance('0', '')];
  public name: string;
  public vm: VM;

  constructor(public vmService: VMService, private snackBar: MatSnackBar, private router: Router) { }

  optionSelected(index){

    this.vmService.createVM(this.vms[index]).then(vm => {
      return;
      let ref = this.snackBar.open('Sucessfully created VM', 'Visit', { duration: 3000 });

      ref.afterDismissed().subscribe(()=> {
        // TODO change this to the VM instance location
        this.router.navigate(['/dashboard']);
      });
    });
  }

  ngOnInit() {
  }
}
