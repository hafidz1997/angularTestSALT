import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { GalleryComponent } from './parts/gallery/gallery.component';
import { SubImageComponent } from './components/sub-image/sub-image.component';
import { SidebarTopComponent } from './parts/sidebar-top/sidebar-top.component';
import { SidebarBottomComponent } from './parts/sidebar-bottom/sidebar-bottom.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { SidebarTitleComponent } from './components/sidebar-title/sidebar-title.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    SubImageComponent,
    SidebarTopComponent,
    SidebarBottomComponent,
    ActivityComponent,
    ChannelsComponent,
    SidebarTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
