import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-sevas',
  templateUrl: './sevas.component.html',
  styleUrls: ['./sevas.component.scss']
})
export class SevasComponent implements OnInit {

  constructor(public resource: ResourceService) { }

  ngOnInit() {
  }

}
