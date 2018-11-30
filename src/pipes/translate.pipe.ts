import { Pipe, PipeTransform } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private resource: ResourceService) {}

  transform(value: any, lang: any): any {

    if(value){
      let locale = this.resource.lan;
      return this.resource.labels[locale][value];
    }
    return null;
  }

}
