import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  devices: any[] = [];
  public searchDevice: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  clearSearch() {
    this.searchDevice = '';
  }
}
