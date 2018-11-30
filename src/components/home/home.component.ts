import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  htmlTxt: any;
  constructor(public resource: ResourceService) { 

  }

  ngOnInit() {
  }

  // home_html_content


}
