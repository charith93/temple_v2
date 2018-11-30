import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-language-fab',
  templateUrl: './language-fab.component.html',
  styleUrls: ['./language-fab.component.scss']
})
export class LanguageFabComponent implements OnInit {
  languages: Object;
  constructor(private data: DataService, private resource: ResourceService) { }

  ngOnInit() {
    this.data.getAssetsJson('languages.json').subscribe(
      locals => this.languages = locals
    );
  }

  switchLanguage(localeCode){
    console.log(localeCode);
    this.resource.lan = localeCode;
  }

}
