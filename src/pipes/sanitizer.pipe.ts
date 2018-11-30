import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslatePipe } from './translate.pipe';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {
  constructor(private sanitize: DomSanitizer) {}
  transform(value: any, args?: any): any {
    
    if(value){
      return this.sanitize.bypassSecurityTrustHtml(value)
    }
    return null;
  }

}
