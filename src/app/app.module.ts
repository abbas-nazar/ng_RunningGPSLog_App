import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from './activity.service';
import {RouterModule, Routes } from '@angular/router';
import { MapService } from './map.service';

const appRoutes: Routes =
  [
    {
      path: 'runs',
      component: ActivityListComponent
    }
    ,
    {
      path: 'run/:id',
      component: MapComponent
    },
    {
      path: '', redirectTo: '/runs', pathMatch: 'full'
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ActivityService,MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
