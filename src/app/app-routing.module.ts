import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PhotoGalleryComponent } from '../components/photo-gallery/photo-gallery.component';
import { HistoryOfTempleComponent } from '../components/history-of-temple/history-of-temple.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { DonationsComponent } from '../components/donations/donations.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { SevasComponent } from '../components/sevas/sevas.component';
import { FestivalsComponent } from '../components/festivals/festivals.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'historyOfTemple',
    component: HistoryOfTempleComponent
  },
  {
    path: 'events',
    children: [
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'sevas',
        component: SevasComponent
      },
      {
        path: 'festivals',
        component: FestivalsComponent
      },
    ]
  },
  {
    path: 'photoGallery',
    component: PhotoGalleryComponent
  },
  {
    path: 'donations',
    component: DonationsComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
