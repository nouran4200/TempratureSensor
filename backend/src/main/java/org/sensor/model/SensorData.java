package org.sensor.model;

import javax.persistence.*;
import java.time.*;

@Entity
public class SensorData {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sensor_data_seq")
    @SequenceGenerator(name = "sensor_data_seq", sequenceName = "sensor_data_seq", allocationSize = 1)
    private Long id;

    private Long deviceId;
    private int temperature;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(Long deviceId) {
        this.deviceId = deviceId;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    private LocalDateTime timestamp;

    // getters and setters
}