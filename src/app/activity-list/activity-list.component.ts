import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getAllACtivities();
    this.totalActivities = this.activityService.getTotalActivities(this.activities);
    this.totalDistance = this.activityService.getTotalDistance(this.activities);
    this.firstDate = this.activityService.getFirstDate(this.activities);
  }

}
