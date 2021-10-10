import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  IgxAvatarModule,
  IgxFilterModule,
  IgxIconModule,
  IgxListModule,
  IgxInputGroupModule,
  IgxButtonGroupModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [AppComponent, DevicesListComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
