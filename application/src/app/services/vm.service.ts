import { Injectable } from '@angular/core';

import { VM } from '@models/VM';

@Injectable({
  providedIn: 'root'
})
export class VMService {

  constructor() { }

  async createVM(vm: VM): Promise<VM> {
    // TODO create a VM and return the VM with an id
    return VM.getBasicInstance('0');
  }

  async deleteVM(vm: VM): Promise<any> {
    // TODO delete the VM
  }
}
