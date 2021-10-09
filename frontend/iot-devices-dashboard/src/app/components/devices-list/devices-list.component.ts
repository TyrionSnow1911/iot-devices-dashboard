import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],
})
export class DevicesListComponent implements OnInit {
  devices: any;
  currentDevice = null;
  currentIndex = -1;
  title = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.retrieveDevices();
  }

  retrieveDevices(): void {
    this.dataService.getAll().subscribe(
      (data) => {
        this.devices = data;
        console.log(data);
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

  searchTitle(): void {
    this.dataService.findByTitle(this.title).subscribe(
      (data) => {
        this.devices = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
