package org.sensor.repository;

import org.sensor.model.SensorData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface SensorDataRepository extends JpaRepository<SensorData, Long> {


    List<SensorData> findByDeviceId(Long deviceId);

    SensorData findTopByDeviceIdOrderByTimestampDesc(Long deviceId);

    List<SensorData> findAllByDeviceIdOrderByTimestampDesc(Long deviceId);

}