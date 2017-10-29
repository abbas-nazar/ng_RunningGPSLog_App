import { Component, OnInit , AfterViewInit} from '@angular/core';
import { MapService} from '../map.service';
import {IActivity} from '../shared/activity.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _mapService: MapService, private _route: ActivatedRoute) { }

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit() {

    this.activity = this._mapService.getActivity(
      +this._route.snapshot.params['id']);
  }

}
