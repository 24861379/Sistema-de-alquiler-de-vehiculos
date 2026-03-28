package com.RentCar.RentCar.repository;

import com.RentCar.RentCar.entity.PagoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PagoRepositorio extends JpaRepository<PagoEntity, Long> {
}