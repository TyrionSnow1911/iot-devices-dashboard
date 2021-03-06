import { FilterPipe } from './../../pipe/filter.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceListComponent } from './device-list.component';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [HttpHandler, HttpClient, FilterPipe],
      declarations: [DeviceListComponent, FilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.retrieveDevices();
  });

  it('should create device list component.', () => {
    expect(component).toBeTruthy();
  });
});
