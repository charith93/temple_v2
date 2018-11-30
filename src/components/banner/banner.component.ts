import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Resolve } from '@angular/router';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  currentUrl: string;
  constructor(private router: Router, public resource: ResourceService) {
    // this.router.events.subscribe(
    //   (ne: NavigationEnd) => {console.log(ne.url); this.currentUrl = ne.url; });
    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log(event.url)
        this.currentUrl = event.url;
      }
    })
  }
  ngOnInit() {
  }

}
