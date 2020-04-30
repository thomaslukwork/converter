import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Unit } from '../unit.model';

@Component({
  selector: 'app-weight-tab',
  templateUrl: './weightTab.page.html',
  styleUrls: ['./weightTab.page.scss'],
})
export class WeightTabPage {
  units: Unit[] = [
    {
      type: 'weight',
      id: 't',
      unitDesc: 'ton (t)',
      ratio: 1
    },
    {
      type: 'weight',
      id: 'cwt',
      unitDesc: 'hundredWeight (cwt)',
      ratio: 20
    },
    {
      type: 'weight',
      id: 'st',
      unitDesc: 'stone (st)',
      ratio: 160
    },
    {
      type: 'weight',
      id: 'lb',
      unitDesc: 'pound (lb)',
      ratio: 2240
    },
    {
      type: 'weight',
      id: 'oz',
      unitDesc: 'ounce (oz)',
      ratio: 35840
    },
    {
      type: 'weight',
      id: 'to',
      unitDesc: 'tonnes',
      ratio: 1.016064
    },
    {
      type: 'weight',
      id: 'kg',
      unitDesc: 'kilogram (kg)',
      ratio: 1016.064
    },
    {
      type: 'weight',
      id: 'g',
      unitDesc: 'gram (g)',
      ratio: 1016064
    }
  ];

  fromValue = 0.000;
  toValue = 0.000;
  fromSelectedUnit = this.units[0];
  toSelectedUnit = this.units[0];
  allDescriptions: string[] = [];

  resultValue: {
    'col-0': { text: string; value: Unit };
    'col-1': { text: string; value: Unit }
  };

  gadgets: any[] = [
    this.allDescriptions,
    this.allDescriptions
  ];
  numColumns = 2; // number of columns to display on picker over lay
  numOptions = this.units.length;  // number of items (or rows) to display on picker over lay

  constructor(private pickerController: PickerController) {
    this.setAllDesc();
  }

  setAllDesc() {
    for (let i = 0; i < this.units.length; i++) {
      this.allDescriptions[i] = this.units[i].unitDesc;
    }
  }

  onChange = () => {
    this.toValue = this.fromValue * this.toSelectedUnit.ratio / this.fromSelectedUnit.ratio;
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
