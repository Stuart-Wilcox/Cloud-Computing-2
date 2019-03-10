import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

const EXPIRY = 5*(1000*60*60); // 5 hour expiry

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean;
  private accessToken: string;

  constructor(private http: HttpClient) {
    this.isAuthenticated = false;
    this.accessToken = null;

    let storedToken = window.sessionStorage.getItem('x-access-token');
    let storedTokenTimestamp = parseInt(window.sessionStorage.getItem('x-access-token-timestamp'));
    if(storedToken && storedTokenTimestamp && storedTokenTimestamp + EXPIRY > new Date().getTime()){
      this.accessToken = storedToken;
      this.isAuthenticated = true;
    }
    if(storedTokenTimestamp + EXPIRY < new Date().getTime()){
      // token expired
      window.sessionStorage.removeItem('x-access-token');
      window.sessionStorage.removeItem('x-access-token-timestamp');
    }
  }

  public async logout(): Promise<any> {
    this.isAuthenticated = false;
    this.accessToken = null;
    window.sessionStorage.removeItem('x-access-token');
    window.sessionStorage.removeItem('x-access-token-timestamp');
  }

  public async login(username, password): Promise<any> {
    return this.http
    .post(`/public-api/login`, { username, password })
    .toPromise()
    .then(response => {
      if (!response['token']) { throw new Error('No token provided'); }
      this.isAuthenticated = true;
      this.accessToken = response['token'];

      window.sessionStorage.setItem('x-access-token', this.accessToken);
      window.sessionStorage.setItem('x-access-token-timestamp', new Date().getTime().toString())
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
