package org.sensor.controller;

import org.sensor.model.SensorData;
import org.sensor.service.SensorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/sensor-data")
public class SensorDataController {

    private final SensorDataService sensorDataService;

    @Autowired
    public SensorDataController(SensorDataService sensorDataService) {
        this.sensorDataService = sensorDataService;
    }

    @PostMapping
    public ResponseEntity<String> receiveSensorData(@RequestBody String hexData) {
        try {
            List<SensorData> sensorDataList = parseConcatenatedHexData(hexData);
            for (SensorData data : sensorDataList) {
                sensorDataService.saveSensorData(data);
            }
            return new ResponseEntity<>("Data received and parsed successfully", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error parsing or saving data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{deviceId}")
    public ResponseEntity<List<SensorData>> getSensorData(@PathVariable Long deviceId) {
        List<SensorData> sensorDataList = sensorDataService.getSensorDataByDeviceId(deviceId);
        return new ResponseEntity<>(sensorDataList, HttpStatus.OK);
    }

    private List<SensorData> parseConcatenatedHexData(String hexData) {
        List<SensorData> sensorDataList = new ArrayList<>();
        hexData = hexData.replace("0x", "");
        hexData = hexData.replace("\"", "");

        // Assuming each item in hexData a device with 5 bytes (4 bytes for Device Id, 1 byte for Temperature)
        for (int i = 0; i < hexData.length(); i += 10) {
            if (i + 10 <= hexData.length()) {
                String deviceHex = hexData.substring(i, i + 8);
                String temperatureHex = hexData.substring(i + 8, i + 10);

                System.out.println(hexData);
                System.out.println(deviceHex);
                System.out.println(temperatureHex);
                System.out.println(Integer.parseInt(deviceHex, 16));
                System.out.println(Byte.parseByte(temperatureHex, 16));

                SensorData sensorData = new SensorData();
                sensorData.setDeviceId(Integer.parseInt(deviceHex, 16));
                sensorData.setTemperature(Byte.parseByte(temperatureHex, 16));
                sensorData.setTimestamp(LocalDateTime.now());

                sensorDataList.add(sensorData);
            }
        }


        return sensorDataList;
    }



}