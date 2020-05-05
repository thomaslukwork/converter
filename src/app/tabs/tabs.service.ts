import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getRoundingValue(num: number) {
    return Math.round((num + Number.EPSILON) * 1000) / 1000;
  }
}
