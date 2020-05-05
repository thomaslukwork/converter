import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { TabsService } from '../tabs/tabs.service';
import { Unit } from '../unit.model';


@Component({
  selector: 'app-areaTab',
  templateUrl: 'areaTab.page.html',
  styleUrls: ['areaTab.page.scss']
})
export class AreaTabPage {
  units: Unit[] = [
    {
      type: 'area',
      id: 'mi',
      unitDesc: 'square mile (mi²)',
      ratio: 1
    },
    {
      type: 'area',
      id: 'ac',
      unitDesc: 'acre',
      ratio: 640
    },
    {
      type: 'area',
      id: 'yd',
      unitDesc: 'square yard (yd²)',
      ratio: 3097600
    },
    {
      type: 'area',
      id: 'ft',
      unitDesc: 'square foot (ft²)',
      ratio: 27878400
    },
    {
      type: 'area',
      id: 'in',
      unitDesc: 'square inch (in²)',
      ratio: 4014489600
    },
    {
      type: 'area',
      id: 'km',
      unitDesc: 'square kilometre (km²)',
      ratio: 2.5899881006
    },
    {
      type: 'area',
      id: 'ha',
      unitDesc: 'hectare (ha²)',
      ratio: 258.99881006
    },
    {
      type: 'area',
      id: 'm',
      unitDesc: 'square metre (m²)',
      ratio: 2589988.1006
    },
    {
      type: 'area',
      id: 'cm',
      unitDesc: 'square centimetre (cm²)',
      ratio: 25899881006
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
