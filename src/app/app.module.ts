import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { FooterComponent } from './system/shared/components/footer/footer.component';
import { HeaderComponent } from './system/shared/components/header/header.component';
import { LayoutsComponent } from './layouts/layouts.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
        AgmCoreModule.forRoot({
      apiKey: environment.MAPBOX_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
