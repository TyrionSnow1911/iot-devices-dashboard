import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
})
export class DeviceDetailsComponent implements OnInit {
  devices: any[] = [];
  currentDevice: any = null;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentDevice.subscribe(
      (currentDevice: any) => (this.currentDevice = currentDevice)
    );
  }
}
