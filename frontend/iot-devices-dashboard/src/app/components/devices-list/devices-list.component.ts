import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IgxFilterOptions } from 'igniteui-angular';

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

  retrieveDevices(): void {
    this.dataService.getAll().subscribe(
      (resp) => {
        this.devices = resp.data;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveDevices();
    this.currentDevice = null;
    this.currentIndex = -1;
  }

  setActiveDevice(device: any, index: any): void {
    this.currentDevice = device;
    this.currentIndex = index;
  }

  removeAllDevices(): void {
    this.dataService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.retrieveDevices();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clearSearch() {
    this.searchDevice = '';
  }
}
