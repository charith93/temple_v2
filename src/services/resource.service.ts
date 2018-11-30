import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  lan: string = 'en';
  labels: object;
  constructor() { }
}
