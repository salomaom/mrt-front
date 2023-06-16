import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ValidationComponent } from './pages/validation/validation.component';
import { FilterBarComponent } from './pages/validation/components/filter-bar/filter-bar.component';
import { ActionsComponent } from './pages/validation/components/actions/actions.component';
import { TransitListComponent } from './pages/validation/components/transit-list/transit-list.component';

import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/form/select/select.component';
import { DatetimepickerComponent } from './components/form/datetimepicker/datetimepicker.component';
import { LabelComponent } from './components/form/label/label.component';
import { InputComponent } from './components/form/input/input.component';
import { CheckboxComponent } from './components/form/checkbox/checkbox.component';
import { ChipComponent } from './components/chip/chip.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    FilterBarComponent,
    ImageGalleryComponent,
    ActionsComponent,
    TransitListComponent,
    ButtonComponent,
    SelectComponent,
    DatetimepickerComponent,
    LabelComponent,
    InputComponent,
    CheckboxComponent,
    ChipComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
