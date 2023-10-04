import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, ToolbarComponent } from '@techbir/material';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [AppComponent, WebsiteComponent],

  imports: [
    BrowserAnimationsModule,
    ToolbarComponent,
    ButtonModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      initialNavigation: 'enabledBlocking',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EntityDataModule.forRoot(entityConfig),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
