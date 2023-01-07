import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { INVENTORY_DATAMODULE_CONFIG } from './inventory.metadata';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('inventory', {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(INVENTORY_DATAMODULE_CONFIG),
    StoreDevtoolsModule.instrument(),
  ],
})
export class InventoryStoreModule {}
