package com.RentCar.RentCar.repository;

import com.RentCar.RentCar.entity.TipoVehiculoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoVehiculoRepository extends JpaRepository<TipoVehiculoEntity, Long> {
}
