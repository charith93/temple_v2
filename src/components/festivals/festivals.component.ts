import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss']
})
export class FestivalsComponent implements OnInit {

  constructor(public resource: ResourceService) { }

  ngOnInit() {
  }

}
