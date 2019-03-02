import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '@services/auth.service';
import { VM } from '@models/VM';

@Injectable({
  providedIn: 'root'
})
export class VMService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async createVM(vm: VM): Promise<VM> {
    return this
      .http
      .post<VM>('/api/vm', vm, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async deleteVM(id: string): Promise<any> {
    return this
      .http
      .delete(`/api/vm?id=${id}`, {headers:this.auth.getHttpHeaders()})
      .toPromise();
  }

  async getVMs(): Promise<VM[]> {
    return this
      .http
      .get<VM[]>('/api/vm', {headers:this.auth.getHttpHeaders()})
      .toPromise();
  }

  async getVM(id: string): Promise<VM> {
    return this
      .http
      .get<VM>(`/api/vm?id=${id}`, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }
}
