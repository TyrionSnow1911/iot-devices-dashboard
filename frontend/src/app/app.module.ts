import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD:frontend/src/app/app.module.ts

=======
>>>>>>> development/refactoring:frontend/iot-devices-dashboard/src/app/app.module.ts
    FilterPipe,
    HomeComponent,
    DeviceDetailsComponent,
    DeviceListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [HttpClientModule, HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
