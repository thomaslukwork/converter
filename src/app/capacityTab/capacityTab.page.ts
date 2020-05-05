import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { TabsService } from '../tabs/tabs.service';
import { Unit } from '../unit.model';

@Component({
  selector: 'app-capacity-tab',
  templateUrl: './capacityTab.page.html',
  styleUrls: ['./capacityTab.page.scss'],
})
export class CapacityTabPage {
  units: Unit[] = [
    {
      type: 'capacity',
      id: 'ukgal',
      unitDesc: 'UK gallon (gal)',
      ratio: 1
    },
    {
      type: 'capacity',
      id: 'ukqt',
      unitDesc: 'UK quart (qt)',
      ratio: 4
    },
    {
      type: 'capacity',
      id: 'ukpt',
      unitDesc: 'UK pint (pt)',
      ratio: 8
    },
    {
      type: 'capacity',
      id: 'oz',
      unitDesc: 'fluid ounce (fl oz)',
      ratio: 160
    },
    {
      type: 'capacity',
      id: 'usgal',
      unitDesc: 'US gallon (gal)',
      ratio: 1.201
    },
    {
      type: 'capacity',
      id: 'usqt',
      unitDesc: 'US quart (qt)',
      ratio: 4.804
    },
    {
      type: 'capacity',
      id: 'uspt',
      unitDesc: 'US pint (pt)',
      ratio: 9.608000000000001
    },
    {
      type: 'capacity',
      id: 'l',
      unitDesc: 'litre (l)',
      ratio: 4.54609188
    },
    {
      type: 'capacity',
      id: 'ml',
      unitDesc: 'mililitre (ml)',
      ratio: 4546.09188
    },
    {
      type: 'capacity',
      id: 'yd',
      unitDesc: 'cubic yard (yd³)',
      ratio: 0.005944057374162267
    },
    {
      type: 'capacity',
      id: 'cc',
      unitDesc: 'cubic centimetre (cc)',
      ratio: 4546.09188
    },
    {
      type: 'capacity',
      id: 'ft',
      unitDesc: 'cubic foot (ft³)',
      ratio: 0.1604897763303859
    },
    {
      type: 'capacity',
      id: 'in',
      unitDesc: 'cubic inch (in³)',
      ratio: 277.325871771601
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

  constructor(
    private pickerController: PickerController,
    private tabsService: TabsService) {
    this.setAllDesc();
  }

  setAllDesc() {
    for (let i = 0; i < this.units.length; i++) {
      this.allDescriptions[i] = this.units[i].unitDesc;
    }
  }

  onChange = () => {
    this.fromValue = this.tabsService.getRoundingValue(this.fromValue);
    this.toValue = this.tabsService.getRoundingValue(this.fromValue * this.toSelectedUnit.ratio / this.fromSelectedUnit.ratio);
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
