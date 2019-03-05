import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean;
  private accessToken: string;

  constructor(private http: HttpClient) {
    this.isAuthenticated = false;
    this.accessToken = null;
  }

  public async logout(): Promise<any> {
    this.isAuthenticated = false;
    this.accessToken = null;
  }

  public async login(username, password): Promise<any> {
    return this.http
    .post(`/public-api/login`, { username, password })
    .toPromise()
    .then(response => {
      if (!response['token']) { throw new Error('No token provided'); }
      this.isAuthenticated = true;
      this.accessToken = response['token'];
      return true;
    });
  }

  public async register(username, password): Promise<any> {
    this.http
    .post(`/public-api/register`, { username, password })
    .toPromise()
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  }

  public getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-access-token': this.accessToken,
    });
  }
}
