import { Injectable } from '@angular/core';

import { IActivity } from './shared/activity.model';
import { saved_ACTIVITIES } from './shared/activities';
import {first} from 'rxjs/operator/first';

@Injectable()
export class ActivityService {

  constructor() {

  }

  getAllACtivities(): IActivity[]{
  return saved_ACTIVITIES.slice(0);
}

  getTotalActivities(allActivities: IActivity[])
  {
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[])
  {
     let totaldis = 0;
     for ( let i = 0; i < allActivities.length ; i++)
     {
        totaldis = totaldis + allActivities[i].distance;
     }
     return totaldis;

  }
  getFirstDate(allActivities: IActivity[])
  {
    let firstdate = new Date("01/01/9999");
    for ( let i = 0; i < allActivities.length ; i++)
    {
      const currentDate = allActivities[i].date;
      if(currentDate < firstdate)
      {
        firstdate = currentDate;
      }
    }
    return firstdate;

  }

}
