import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';


@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']

})
export class ImageViewComponent implements OnChanges {

  @Input() public fPath: Object;
  images =  [];
  items: GalleryItem[];


  constructor(private dService: DataService, public gallery: Gallery,public lightbox: Lightbox) {
    this.gallery.ref('lightbox').setConfig({
      thumbPosition: 'bottom',
      imageSize: 'cover'
    });
    this.gallery.ref('auto-detect').setConfig({
      dots: true,
      thumbPosition: 'top',
      imageSize: 'cover'
    });
   }

  ngOnChanges() {
    this.images = [] ;
    this.getImageUrls()
    this.gallery.ref('lightbox', {imageSize: 'cover', loadingStrategy: 'lazy', thumbPosition: 'top'}).load(this.images);
  }

  getImageUrls() {
    if (!this.fPath)
      return;
    console.log("This", this.fPath);

    var params = {
      Bucket: 'sree-ranganayaka-swamy-temple',
      Prefix: this.fPath ? this.fPath['folderPath'] : ''
    }

    var self = this;

    this.dService.getS3Bucket().listObjects(params, function (err, data) {
      console.log(data);

      data['Contents'].forEach(i => {
        if (i['Size'] != 0) {


          var tempKey = i['Key']
          tempKey = tempKey.replace(' ', '+');
          self.images.push({
            thumb: "https://s3-ap-south-1.amazonaws.com/" + params.Bucket + '/' + tempKey,
            src: "https://s3-ap-south-1.amazonaws.com/" + params.Bucket + '/' + tempKey
          })


        }

      });

      // this.images = tempArr;

      console.log("this.images", JSON.stringify(self.images));

      self.items = self.images.map(item => {
        return new ImageItem({src: item.src, thumb: item.thumb});
      });
  
      // This is for Lightbox example
      self.gallery.ref('lightbox', {imageSize: 'cover', loadingStrategy: 'lazy', thumbPosition: 'top'}).load(this.items);

    })
  }


  /* data['Contents'].forEach(e => {
     var iInx = self.getImageIndex(data['Contents'], e['ETag'])
     console.log(iInx);
 
     if (iInx != -1) {
       var tempKey = e['Key']
       tempKey = tempKey.replace(' ', '+');
       this.folderNames[iInx]['imageUrl'] = "https://s3-ap-south-1.amazonaws.com/" + params.Bucket + '/' + tempKey;
     }
   }); */

}
