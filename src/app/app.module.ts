import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ValidationComponent } from './pages/validation/validation.component';
import { FilterBarComponent } from './pages/validation/components/filter-bar/filter-bar.component';
import { ActionsComponent } from './pages/validation/components/actions/actions.component';
import { TransitListComponent } from './pages/validation/components/transit-list/transit-list.component';

import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    FilterBarComponent,
    ImageGalleryComponent,
    ActionsComponent,
    TransitListComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
