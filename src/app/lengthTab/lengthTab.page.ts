import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { TabsService } from '../tabs/tabs.service';
import { Unit } from '../unit.model';

@Component({
  selector: 'app-lengthTab',
  templateUrl: 'lengthTab.page.html',
  styleUrls: ['lengthTab.page.scss']
})
export class LengthTabPage {
  units: Unit[] = [
    {
      type: 'length',
      id: 'mi',
      unitDesc: 'mile (mi)',
      ratio: 1
    },
    {
      type: 'length',
      id: 'fur',
      unitDesc: 'furlong (fur)',
      ratio: 8
    },
    {
      type: 'length',
      id: 'ch',
      unitDesc: 'chain (ch)',
      ratio: 80
    },
    {
      type: 'length',
      id: 'yd',
      unitDesc: 'yard (yd)',
      ratio: 1760
    },
    {
      type: 'length',
      id: 'ft',
      unitDesc: 'foot (ft)',
      ratio: 5280
    },
    {
      type: 'length',
      id: 'in',
      unitDesc: 'inch (in)',
      ratio: 63360
    },
    {
      type: 'length',
      id: 'km',
      unitDesc: 'kilometre (km)',
      ratio: 1.609344
    },
    {
      type: 'length',
      id: 'hm',
      unitDesc: 'hectometre (hm)',
      ratio: 16.09344
    },
    {
      type: 'length',
      id: 'dam',
      unitDesc: 'decametre (dam)',
      ratio: 160.9344
    },
    {
      type: 'length',
      id: 'm',
      unitDesc: 'metre (m)',
      ratio: 1609.344
    },
    {
      type: 'length',
      id: 'dm',
      unitDesc: 'decimetre (dm)',
      ratio: 16093.44
    },
    {
      type: 'length',
      id: 'cm',
      unitDesc: 'centimetre (cm)',
      ratio: 160934.4
    },
    {
      type: 'length',
      id: 'mm',
      unitDesc: 'millimetre (mm)',
      ratio: 1609344
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
