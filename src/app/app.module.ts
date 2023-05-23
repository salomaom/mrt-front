import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidationComponent } from './pages/validation/validation.component';
import { FilterBarComponent } from './pages/validation/components/filter-bar/filter-bar.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ActionsComponent } from './pages/validation/components/actions/actions.component';
import { TransitListComponent } from './pages/validation/components/transit-list/transit-list.component';

@NgModule({
  declarations: [AppComponent, ValidationComponent, FilterBarComponent, ImageGalleryComponent, ActionsComponent, TransitListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
