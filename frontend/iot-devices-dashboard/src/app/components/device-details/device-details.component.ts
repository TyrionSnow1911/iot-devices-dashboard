import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
})
export class DeviceDetailsComponent implements OnInit {
  currentDevice: any = null;
  message = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getDevice(this.route.snapshot.paramMap.get('id'));
  }

  getDevice(id: any): void {
    this.dataService.get(id).subscribe(
      (data) => {
        this.dataService = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePublished(status: any): void {
    const data = {
      title: this.currentDevice.title,
      status: this.currentDevice.status,
      temperature: this.currentDevice.temperature,
      published: status,
    };

    this.dataService.update(this.currentDevice.id, data).subscribe(
      (response) => {
        this.currentDevice.published = status;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateDevice(): void {
    this.dataService
      .update(this.currentDevice.id, this.currentDevice)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The device was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteDevice(): void {
    this.dataService.delete(this.currentDevice.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/devices']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
