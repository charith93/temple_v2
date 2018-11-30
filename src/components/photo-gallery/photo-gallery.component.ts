import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  folderNames = [];
  folderPath: string;
  allowToFolders: boolean = false;
  constructor(private dService: DataService) {
  }

  

  ngOnInit() {
    const params = {
      Bucket: 'sree-ranganayaka-swamy-temple'
    };

    var self = this;

    this.dService.getS3Bucket().listObjects(params, function (err, data) {
      if (!err) {
        console.log("data", data);
        if (Array.isArray(data['Contents'])) {
          self.folderNames = data['Contents'];
        }
        console.log(JSON.stringify(this.folderNames) );
      }
    })

    setTimeout(() => {
      console.log("Completed");
      this.allowToFolders = true;
    }, 1000);



  }

  getImageIndex(contents, id) {
    var inx = -1;
    contents.forEach(function (element, i) {
      if (element['ETag'] == id) {
        inx = i;
      }
    });
    return inx;
  }

  selectFolder(event){
    console.log(event)
    this.folderPath = event;
  }
}

export type Object = {
  [key:string]:any
}





