import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '@services/auth.service';
import { VM } from '@models/VM';

@Injectable({
  providedIn: 'root'
})
export class VMService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getOfferings(): Promise<VM[]> {
    return this
      .http
      .get<VM[]>('/api/vm/offerings', {headers: this.auth.getHttpHeaders()})
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

  async createVM(name: string, type: string): Promise<VM> {
    return this
      .http
      .post<VM>('/api/vm', { name, type }, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async deleteVM(id: string): Promise<any> {
    return this
      .http
      .delete<any>(`/api/vm?id=${id}`, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async upgradeVM(id: string): Promise<any> {
    return this
      .http
      .post<any>(`/api/vm/upgrade?id=${id}`, {}, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async downgradeVM(id: string): Promise<any> {
    return this
      .http
      .post<any>(`/api/vm/downgrade?id=${id}`, {}, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async startVM(id: string): Promise<any> {
    return this
      .http
      .post<any>(`/api/vm/start?id=${id}`, {}, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async stopVM(id: string): Promise<any> {
    return this
      .http
      .post<any>(`api/vm/stop?id=${id}`, {}, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

}
