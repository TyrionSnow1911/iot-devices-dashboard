import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  public searchDevice: string = '';

  currentDevice: any = null;
  currentIndex = -1;
  devices: any[] = [];

  constructor(private dataService: DataService) {
    this.retrieveDevices();
  }

  ngOnInit() {
    this.retrieveDevices();
  }

  async retrieveDevices(): Promise<void> {
    await this.dataService.getAll().subscribe(
      (resp) => {
        this.devices = resp.data;
        console.log(this.devices);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setActiveDevice(device: any, index: any): void {
    this.currentDevice = device;
    this.currentIndex = index;
    this.dataService.setCurrentDevice(this.currentDevice);
  }

  clearSearch() {
    this.searchDevice = '';
  }
}
