import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Temperature Sensor API';
  sensorData: string = '';
  deviceData: any[] = []; // Array to store device data
  devices: any[] = []; // Add this property for ngFor in the template
  selectedDevice: any; // Add this property
  selectedDeviceData: any[]; // Add this property

  // Form for simulating data entry
  simulationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Initialize the form
    this.simulationForm = this.fb.group({
      hexData: [''] // Hex data input field
    });

    this.selectedDeviceData = [];

  }

  // Method to handle the simulation form submission
  simulateData() {
    const hexData = this.simulationForm.value.hexData;

    // Call the API service to process the hex data
    this.apiService.processHexData(hexData).subscribe(
      (response: any) => {
        // Update the deviceData array with the received data
        this.deviceData = response;
      },
      (error: any) => {
        console.error('Error processing hex data:', error);
      }
    );
  }

  submitData() {
    if (this.sensorData) {
      this.apiService.processHexData(this.sensorData).subscribe(
        (response) => {
          // Handle successful response
          console.log('Response:', response);
        },
        (error) => {
          // Handle error
          console.error('Error:', error);
        }
      );
    }
  }

  viewDeviceData(deviceId: number) {
    // Call the API service to get detailed data for the selected device
    this.apiService.getDeviceDetails(deviceId).subscribe(
      (details: any) => {
        // Implement logic to display the detailed data, for example:
        console.log(`Details for Device ID ${deviceId}:`, details);
      },
      (error: any) => {
        console.error(`Error fetching details for Device ID ${deviceId}:`, error);
      }
    );
  }
}
