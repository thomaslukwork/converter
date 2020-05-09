import { Injectable } from '@angular/core';
import { Unit } from '../unit.model';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getRoundingValue(num: number) {
    return Math.round((num + Number.EPSILON) * 1000) / 1000;
  }

  getPreSelectedIndex(units: Unit[], selectedUnit: Unit) {
    for (let i = 0; i < units.length; i++) {
      if (units[i].id === selectedUnit.id) {
        return i;
      }
    }
  }
}
