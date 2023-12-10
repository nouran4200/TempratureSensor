// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  processHexData(hexData: string): Observable<any> {

      const deviceId = parseInt(hexData.substring(0, 8), 16);
      const temperature = parseInt(hexData.substring(8), 16);


      const payload = {
        deviceId: deviceId,
        temperature: temperature,
      };


      return this.http.post(`${this.apiUrl}/store-sensor-data`, payload);
    }


  getDeviceDetails(deviceId: number): Observable<any> {
    const url = `${this.apiUrl}/devices/${deviceId}`;

    return this.http.get(url);
  }


}
