import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private currentDeviceSource = new BehaviorSubject<any>(null);
  currentDevice = this.currentDeviceSource.asObservable();

  private currentIndexSource = new BehaviorSubject<number>(0);
  currentIndex = this.currentIndexSource.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/devices`);
  }

  setCurrentDevice(device: any) {
    this.currentDeviceSource.next(device);
  }

  setCurrentIndex(index: number) {
    this.currentIndexSource.next(index);
  }
}
