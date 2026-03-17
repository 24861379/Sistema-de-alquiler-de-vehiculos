package com.RentCar.RentCar.services;

import com.RentCar.RentCar.dto.dtoRequest.UsuarioDtoRequest;
import com.RentCar.RentCar.dto.dtoResponse.LoginDtoResponse;
import com.RentCar.RentCar.entity.UsuarioEntity;
import com.RentCar.RentCar.repository.UsuarioRepository;
import com.RentCar.RentCar.security.JwtUtil;
import jakarta.persistence.NoResultException;
import jakarta.transaction.Transactional;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService  {
    private UsuarioRepository usuarioRepository;
    private PasswordEncoder passwordEncoder;
    private JwtUtil jwtUtil;

    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Transactional
    public LoginDtoResponse login (String email, String password){
        List<UsuarioEntity> resultado =usuarioRepository.loginUsuario(email);
//                .orElseThrow(()-> new BadCredentialsException("Credenciales incorrectas"));

            if(resultado.isEmpty()){
                throw new BadCredentialsException("Credenciales incorrectas");
            }

            UsuarioEntity usuario = resultado.get(0);


        boolean passwordCorrecto = passwordEncoder.matches(
                password,
                usuario.getPasswordHash()
        );

        if(!passwordCorrecto){
            throw new BadCredentialsException("Credenciales incorrectas");
        }

        String token = jwtUtil.generateTokenWithRole(
                usuario.getUsuarioId().toString(),
                usuario.getRol().getNombreRol()
        );
        return new LoginDtoResponse(
                usuario.getUsuarioId(),
                usuario.getNombre(),
                usuario.getEmail(),
                usuario.getRol().getNombreRol(),
                token
        );
    }

    @Transactional
    public void registrarUsuario(UsuarioDtoRequest request){
        String passwordHash = passwordEncoder.encode(request.getPassword());

        usuarioRepository.crearUsuario(
                request.getEmail(),
                request.getNombre(),
                passwordHash,
                request.getIdRol());
    }
}
