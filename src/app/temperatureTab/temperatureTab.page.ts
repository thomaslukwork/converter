import { Component } from '@angular/core';
import { Unit } from '../unit.model';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-temperatorTab',
  templateUrl: 'temperatureTab.page.html',
  styleUrls: ['temperatureTab.page.scss']
})
export class TemperatureTabPage {
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

  resultValue: {
    'col-0': { text: string; value: Unit };
    'col-1': { text: string; value: Unit }
  };

  gadgets: any[] = [
    [
      this.units[0].unitDesc,
      this.units[1].unitDesc
    ],
    [
      this.units[0].unitDesc,
      this.units[1].unitDesc
    ]
  ];
  numColumns = 2; // number of columns to display on picker over lay
  numOptions = this.units.length;  // number of items (or rows) to display on picker over lay

  constructor(private pickerController: PickerController) { }

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

  async showPicker() {
    const options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: (value: any) => {
            this.resultValue = value;
            // console.log(this.resultValue['col-0'].value);
            // console.log(this.resultValue['col-1'].value);
            this.fromSelectedUnit = this.resultValue['col-0'].value;
            this.toSelectedUnit = this.resultValue['col-1'].value;
            this.onChange();
          }
        }
      ],
      animated: true,
      columns: this.getColumns()
    };
    const picker = await this.pickerController.create(options);
    picker.present();
  }

  getColumns() {
    const columns = [];
    for (let i = 0; i < this.numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i)
      });
    }
    return columns;
  }

  getColumnOptions(columIndex: number) {
    const options = [];
    for (let i = 0; i < this.numOptions; i++) {
      options.push({
        text: this.gadgets[columIndex][i % this.numOptions],
        value: this.units[i]
      });
    }
    return options;
  }
}
