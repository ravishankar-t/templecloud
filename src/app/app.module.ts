import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './shared/banner.component';
import { MenuComponent } from './shared/menu.component';
import { SevasComponent } from './shared/sevas.component';
import { TimingsComponent } from './shared/timings.component';
import { NewsupdateComponent } from './shared/newsupdate.component';
import { FooterComponent } from './shared/footer.component';
import { GalleryComponent } from './web/gallery.component';
import { AboutComponent } from './about/abot.component';
import { DonationComponent} from './donation/donation.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './home/homepage.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    SevasComponent,
    TimingsComponent,
    NewsupdateComponent,
    FooterComponent,
    GalleryComponent,
    AboutComponent,
    DonationComponent,
    ContactComponent,
    HomepageComponent
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
