import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],
})
export class DevicesListComponent implements OnInit {
  public searchDevice: string = '';
  devices: any[] = [];
  currentDevice: any = null;
  currentIndex = -1;
  title: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.retrieveDevices();
  }

  async retrieveDevices(): Promise<any> {
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
  }

  clearSearch() {
    this.searchDevice = '';
  }
}
