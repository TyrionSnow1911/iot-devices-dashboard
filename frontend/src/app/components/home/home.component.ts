import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  devices: any[] = [];
  public searchDevice: string = '';
  constructor() {}

  ngOnInit(): void {}

  clearSearch() {
    this.searchDevice = '';
  }
}
