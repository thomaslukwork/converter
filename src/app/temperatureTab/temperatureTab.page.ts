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
    subHeader: 'Select a unit is going to be converted'
  };

  fromSelectedId: string;
  toSelectedId: string;

  // selectedUnit: Unit;
  units: Unit[] = [
    {
      type: 'temp',
      id: 'ce',
      unitDesc: 'Celsius',
      ratio: 1
    },
    {
      type: 'temp',
      id: 'fa',
      unitDesc: 'Fahrenheit',
      ratio: 1
    }
  ];


  onChange = () => {
    console.log('from id == ' + this.fromSelectedId);
    console.log('to id == ' + this.toSelectedId);

    // console.log('selectedUnit id = ' + this.selectedUnit.id);
  }


  // public optionsFn(): void {
  //   //here item is an object 
  //   console.log(this.unit);

  // }
  // public onChange(): void {
  //   console.log('Selected:' + this.place);
  //   let item = this.place;
  //   console.log('Selected:' + item.id);

  // }

  constructor() { }

}
