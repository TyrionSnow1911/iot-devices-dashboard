import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent implements OnInit {
  device = {
    title: '',
    status: '',
    temperature: '',
    usage: 'place-holder',
    published: false,
  };
  submitted = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      title: this.device.status,
      description: this.device.temperature,
    };

    this.dataService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newTutorial(): void {
    this.submitted = false;
    this.device = {
      title: '',
      status: '',
      temperature: '',
      usage: 'place-holder',
      published: false,
    };
  }
}
