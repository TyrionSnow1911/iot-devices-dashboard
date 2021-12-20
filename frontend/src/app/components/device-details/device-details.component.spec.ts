import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceDetailsComponent } from './device-details.component';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('DeviceDetailsComponent', () => {
  let component: DeviceDetailsComponent;
  let fixture: ComponentFixture<DeviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [HttpHandler, HttpClient],
      declarations: [DeviceDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
