import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  constructor(public resource: ResourceService) {
    
   }

  ngOnInit() {
    


  }

}
