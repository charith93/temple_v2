import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAssetsJson(fileName) {
    return this.http.get('./assets/json/' + fileName );
  }

  getS3Bucket(): any {
    const bucket = new S3(
      {
        accessKeyId: 'AKIAIXU6VKMYUKDXRSFQ',
        secretAccessKey: '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',
        region: 'ap-south-1'
      }
    );
    return bucket;
  }

}
