import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AlertsComponent } from './components/alerts/alerts.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { AudioContextModule } from 'angular-audio-context';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';


import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }),
    NgxAudioPlayerModule,
    AudioContextModule.forRoot('balanced'),
    DragDropModule,
    NgbModule,
    TableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

// <button _ngcontent-c1="" aria-haspopup="true" class="buttonAlarms dropdown-toggle" 
// ngbdropdowntoggle="" type="button" aria-expanded="true"><img _ngcontent-c1="" alt="" height="60" width="60" 
// src="https://api.metricamovil.com/MMSecurityWebApp/assets/Alert-icon-hk.png">
// <span _ngcontent-c1="" class="badge badge-light iconD">4</span></button>