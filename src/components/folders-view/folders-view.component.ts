import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-folders-view',
  templateUrl: './folders-view.component.html',
  styleUrls: ['./folders-view.component.scss']
})

export class FoldersViewComponent implements OnInit {

  @Input() folders: Array<Object>;
  @Output() selectedFolder = new EventEmitter();

  folderNames: any = [];

  constructor() { }

  ngOnInit() {
    console.log("Folder Names from Folders", this.folders);
    // if(this.folders.length == 0){
    //   this.folders = [{"Key":"brahmotsavam 2017/","LastModified":"2018-11-26T17:33:33.000Z","ETag":"\"d41d8cd98f00b204e9800998ecf8427e\"","Size":0,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"}},{"Key":"brahmotsavam 2017/pic1.png","LastModified":"2018-11-26T17:34:19.000Z","ETag":"\"dcd164e5efc1a8ac3a03ba761500b442\"","Size":73783,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/brahmotsavam+2017/pic1.png"},{"Key":"construction pics/","LastModified":"2018-11-25T12:26:04.000Z","ETag":"\"d41d8cd98f00b204e9800998ecf8427e\"","Size":0,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/"},{"Key":"construction pics/1.jpg","LastModified":"2018-11-25T12:32:33.000Z","ETag":"\"a7500a31a584925f3b808218b7759a33\"","Size":154841,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/1.jpg"},{"Key":"construction pics/10.jpg","LastModified":"2018-11-25T12:32:38.000Z","ETag":"\"7d50119e50b8683efd410b92502161b7\"","Size":89467,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/10.jpg"},{"Key":"construction pics/11.jpg","LastModified":"2018-11-25T12:32:38.000Z","ETag":"\"97c6f4974b95b2e34bf1ad7d9187059b\"","Size":108631,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/11.jpg"},{"Key":"construction pics/12.jpg","LastModified":"2018-11-25T12:32:39.000Z","ETag":"\"75e57d8d64745c8986460c521b391fb1\"","Size":127321,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/12.jpg"},{"Key":"construction pics/2.jpg","LastModified":"2018-11-25T12:32:34.000Z","ETag":"\"c44d69336ccf5cc3e46cd7cb1a3162ef\"","Size":134249,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/2.jpg"},{"Key":"construction pics/3.jpg","LastModified":"2018-11-25T12:32:35.000Z","ETag":"\"09804a7ec58a99eb3de8fdfba37ad279\"","Size":160863,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/3.jpg"},{"Key":"construction pics/4.jpg","LastModified":"2018-11-25T12:32:36.000Z","ETag":"\"9035fd677c76d6dbc81d8be57756944b\"","Size":135219,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/4.jpg"},{"Key":"construction pics/5.jpg","LastModified":"2018-11-25T12:32:36.000Z","ETag":"\"3b52bc37d433d6f670780480b95ffd94\"","Size":173644,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/5.jpg"},{"Key":"construction pics/6.jpg","LastModified":"2018-11-25T12:32:37.000Z","ETag":"\"96f8d164f1754c37f46a51783b8b33b3\"","Size":165275,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/6.jpg"},{"Key":"construction pics/7.jpg","LastModified":"2018-11-25T12:32:37.000Z","ETag":"\"f2e5943bc13bf43428d4ede0b10d4956\"","Size":123453,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/7.jpg"},{"Key":"construction pics/8.jpg","LastModified":"2018-11-25T12:32:37.000Z","ETag":"\"c3e6bcd3a48d721bf88eba238e13a64b\"","Size":115029,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/8.jpg"},{"Key":"construction pics/9.jpg","LastModified":"2018-11-25T12:32:38.000Z","ETag":"\"1acbc993f8955e6445e68a75c5f793e8\"","Size":167153,"StorageClass":"STANDARD","Owner":{"ID":"b06cb172050d04545f45056491758e55dd42794ba8c248892153d94021d5685d"},"imageUrl":"https://s3-ap-south-1.amazonaws.com/sree-ranganayaka-swamy-temple/construction+pics/9.jpg"}]
    //   this.filterFolderNames();
    // }
    if(this.folders)
    this.filterFolderNames();
    
  }

  folderSelectEventEmit(id) {
    console.log("Callign", id.folderName);
    this.selectedFolder.emit({ folderPath: id.folderName })
  }

  filterFolderNames(){
    console.log(this.folderNames);
    this.folders.forEach(f => {
      if(f['Size'] == 0)
        this.folderNames.push({
          folderName: f['Key'].replace(/\//g,'')
        })
    });
  }

}
