import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '@services/auth.service';
import { Event } from '@models/Event';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getUsage(id: string): Promise<any> {
    return this
      .http
      .get<any>(`/api/vm/usage?id=${id}`, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }

  async addEvent(event: Event): Promise<any> {
    return this
      .http
      .post<any>(`/usage?id=${event.vmId}`, event, {headers: this.auth.getHttpHeaders()})
      .toPromise();
  }
}
