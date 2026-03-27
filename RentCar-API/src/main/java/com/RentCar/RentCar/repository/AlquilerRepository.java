package com.RentCar.RentCar.repository;

import com.RentCar.RentCar.entity.AlquilerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlquilerRepository extends JpaRepository<AlquilerEntity, Long> {
}