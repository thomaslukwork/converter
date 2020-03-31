import { Component } from '@angular/core';
import { Unit } from '../unit.model';

@Component({
  selector: 'app-temperatorTab',
  templateUrl: 'temperatureTab.page.html',
  styleUrls: ['temperatureTab.page.scss']
})
export class TemperatureTabPage {
  customPopoverOptions: any = {
    header: 'Temperature',
    subHeader: 'Select a unit'
  };

  units: Unit[] = [
    {
      type: 'temp',
      id: 'ce',
      unitDesc: 'Celsius (°C)',
      ratio: 1.2
    },
    {
      type: 'temp',
      id: 'fa',
      unitDesc: 'Fahrenheit (°F)',
      ratio: 1.8
    }
  ];

  fromValue = 0.000;
  toValue = 0.000;
  fromSelectedUnit = this.units[0];
  toSelectedUnit = this.units[0];

  onChange = () => {
    // console.log('from value == ' + this.fromValue);
    // console.log('to value == ' + this.toValue);
    // console.log('from selected id == ' + this.fromSelectedUnit.id);
    // console.log('to selected id == ' + this.toSelectedUnit.id);

    if (this.fromSelectedUnit.id === 'ce' && this.toSelectedUnit.id === 'fa') {
      this.toValue = (this.fromValue * 9 / 5) + 32;
    } else if (this.fromSelectedUnit.id === 'fa' && this.toSelectedUnit.id === 'ce') {
      this.toValue = (this.fromValue - 32) * 5 / 9;
    } else {
      // fromSelectedUnit.Id = toSelectedUnit.Id
      this.toValue = this.fromValue;
    }

  }
  constructor() { }
}
