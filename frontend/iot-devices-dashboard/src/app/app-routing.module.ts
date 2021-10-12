import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesListComponent } from './components/devices-list/devices-list.component';

const routes: Routes = [
  { path: '', component: DevicesListComponent },
  { path: 'devices', component: DevicesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}