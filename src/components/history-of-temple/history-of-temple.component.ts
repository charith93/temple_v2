import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-history-of-temple',
  templateUrl: './history-of-temple.component.html',
  styleUrls: ['./history-of-temple.component.scss']
})
export class HistoryOfTempleComponent implements OnInit {

  constructor(private resource: ResourceService) { }

  ngOnInit() {
  }

}
