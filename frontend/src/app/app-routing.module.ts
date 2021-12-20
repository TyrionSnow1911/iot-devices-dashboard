<<<<<<< HEAD:frontend/iot-devices-dashboard/src/app/app-routing.module.ts
import { DashboardComponent } from './components/dashboard/dashboard.component';
=======
import { HomeComponent } from './components/home/home.component';
>>>>>>> development/refactoring:frontend/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD:frontend/iot-devices-dashboard/src/app/app-routing.module.ts
  { path: '', component: DashboardComponent },
  { path: 'devices', component: DashboardComponent },
=======
  { path: '', component: HomeComponent },
  { path: 'devices', component: HomeComponent },
>>>>>>> development/refactoring:frontend/src/app/app-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
