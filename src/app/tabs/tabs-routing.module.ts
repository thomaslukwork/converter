import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'temperatureTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../temperatureTab/temperatureTab.module').then(m => m.TemperatureTabPageModule)
          }
        ]
      },
      {
        path: 'lengthTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lengthTab/lengthTab.module').then(m => m.LengthTabPageModule)
          }
        ]
      },
      {
        path: 'areaTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../areaTab/areaTab.module').then(m => m.AreaTabPageModule)
          }
        ]
      },
      {
        path: 'capacityTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../capacityTab/capacityTab.module').then(m => m.CapacityTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/temperatureTab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/temperatureTab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
