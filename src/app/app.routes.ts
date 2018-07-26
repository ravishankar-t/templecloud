import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GalleryComponent } from './web/gallery.component';
import {HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component'; 
import { ContactComponent } from './contact/contact.component';
import {HomepageComponent } from './home/homepage.component';
import {SevasComponent } from './shared/sevas.component';

export const routes: Routes = [

    { path: 'main', component: AppComponent },
    { path: 'gallery', component :GalleryComponent},
    { path:'home',component: HomeComponent},
    { path:'donation',component:DonationComponent},
    { path: 'contact',component:ContactComponent},
    { path: 'homepage',component:HomepageComponent},
    { path: 'sevas',component:SevasComponent}

]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);