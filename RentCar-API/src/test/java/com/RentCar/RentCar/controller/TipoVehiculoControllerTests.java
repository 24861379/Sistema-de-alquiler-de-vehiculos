package com.RentCar.RentCar.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.RentCar.RentCar.entity.TipoVehiculoEntity;
import com.RentCar.RentCar.repository.TipoVehiculoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class TipoVehiculoControllerTests {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private TipoVehiculoRepository repo;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setup() {
        repo.deleteAll();
    }

    @Test
    void createAndList() throws Exception {
        TipoVehiculoEntity tipo = new TipoVehiculoEntity(null, "SUV", null);
        mvc.perform(post("/api/tipos-vehiculo")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(tipo)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNumber())
                .andExpect(jsonPath("$.tipo").value("SUV"));

        mvc.perform(get("/api/tipos-vehiculo"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("[0].tipo").value("SUV"));
    }

    @Test
    void updateTipo() throws Exception {
        TipoVehiculoEntity saved = repo.save(new TipoVehiculoEntity(null, "Pickup", null));
        saved.setTipo("Pickup2");
        mvc.perform(put("/api/tipos-vehiculo/" + saved.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(saved)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.tipo").value("Pickup2"));
    }

    @Test
    void deleteTipo() throws Exception {
        TipoVehiculoEntity saved = repo.save(new TipoVehiculoEntity(null, "Coupe", null));
        mvc.perform(delete("/api/tipos-vehiculo/" + saved.getId()))
                .andExpect(status().isNoContent());
        assertThat(repo.findById(saved.getId())).isEmpty();
    }
}