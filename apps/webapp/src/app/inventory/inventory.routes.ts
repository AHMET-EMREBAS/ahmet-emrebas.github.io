import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import * as ResourceModules from '@techbir/forms';

export const routesInventory: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: Object.values(ResourceModules)
      .filter((value) => value?.name?.endsWith('Module'))
      .map((value) => {
        return {
          path: value.name.toLocaleLowerCase().replace('module', ''),
          loadChildren: () => value,
        };
      }),
  },
];
