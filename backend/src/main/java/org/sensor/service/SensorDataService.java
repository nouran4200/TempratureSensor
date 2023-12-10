package org.sensor.service;

import org.sensor.model.SensorData;
import org.sensor.repository.SensorDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SensorDataService {

    private final SensorDataRepository sensorDataRepository;

    @Autowired
    public SensorDataService(SensorDataRepository sensorDataRepository) {
        this.sensorDataRepository = sensorDataRepository;
    }

    public void saveSensorData(SensorData sensorData) {
        sensorDataRepository.save(sensorData);
    }

    public List<SensorData> getSensorDataByDeviceId(Long deviceId) {
        return sensorDataRepository.findByDeviceId(deviceId);
    }
}