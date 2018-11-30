import { Component } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temple';
  allowRouter: boolean = false;

  constructor(private resource: ResourceService, private data: DataService){
    console.log("App Component Constructor");
    this.data.getAssetsJson('locals.json').subscribe(
      locals => {
        console.log(locals);
        this.resource.labels = locals;
        this.allowRouter = true;
      }
    );

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("App Component");
  }

}
