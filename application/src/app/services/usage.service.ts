import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  constructor() { }

  getUsage(id: string): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({});
      }, 3000)
    });
  }
}
