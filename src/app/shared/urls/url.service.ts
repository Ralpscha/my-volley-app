import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private env: EnvironmentService) {
  }

  get volleybalService(): string {
    // this.env.getTest();
    // return this.env.volleybalServiceUrl;
    return '/team';
  }
}
