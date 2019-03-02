import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '@services/auth.service';
import { VM } from '@models/VM';

@Injectable({
  providedIn: 'root'
})
export class VMService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  async createVM(vm: VM): Promise<VM> {
    // TODO create a VM and return the VM with an id
    // this.http.post('/api/')
    return VM.getBasicInstance('0', '');
  }

  async deleteVM(vm: VM): Promise<any> {
    // TODO delete the VM
  }

  async getVMs(): Promise<VM[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([ VM.getBasicInstance('0', 'MyApp1'), VM.getLargeInstance('0', 'MyApp2'), VM.getUltraLargeInstance('0', 'MyApp3')]);
      }, 3000);
    });
  }

  async getVM(id: string): Promise<VM> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(VM.getLargeInstance('0', 'MyApp2'))
      }, 3000);
    })
    // return VM.getBasicInstance('0', 'MyApp1');
  }
}
