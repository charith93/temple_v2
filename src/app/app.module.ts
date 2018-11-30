import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from '../components/banner/banner.component';
import { HomeComponent } from '../components/home/home.component';
import { HistoryOfTempleComponent } from '../components/history-of-temple/history-of-temple.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { PhotoGalleryComponent } from '../components/photo-gallery/photo-gallery.component';
import { DonationsComponent } from '../components/donations/donations.component';
import { LanguageFabComponent } from '../components/language-fab/language-fab.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { SevasComponent } from '../components/sevas/sevas.component';
import { FestivalsComponent } from '../components/festivals/festivals.component';
import { FoldersViewComponent } from '../components/folders-view/folders-view.component';
import { ImageViewComponent } from '../components/image-view/image-view.component';

import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import { GallerizeModule } from  '@ngx-gallery/gallerize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GALLERY_CONFIG } from '@ngx-gallery/core';
import { PipesModule } from 'src/pipes/pipe.module';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    HistoryOfTempleComponent,
    ContactUsComponent,
    PhotoGalleryComponent,
    DonationsComponent,
    LanguageFabComponent,
    ScheduleComponent,
    SevasComponent,
    FestivalsComponent,
    FoldersViewComponent,
    ImageViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    BrowserAnimationsModule,
    PipesModule
  ],
  providers: [{
    provide: GALLERY_CONFIG,
    useValue: {
      imageSize: 'cover'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
