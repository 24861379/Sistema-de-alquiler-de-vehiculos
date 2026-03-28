package com.RentCar.RentCar.services;

import com.RentCar.RentCar.dto.dtoRequest.ActualizarUsuarioDtoRequest;
import com.RentCar.RentCar.dto.dtoRequest.UsuarioDtoRequest;
import com.RentCar.RentCar.dto.dtoResponse.GetUsuariosDtoResponse;
import com.RentCar.RentCar.dto.dtoResponse.LoginDtoResponse;
import com.RentCar.RentCar.entity.UsuarioEntity;
import com.RentCar.RentCar.repository.UsuarioRepository;
import com.RentCar.RentCar.security.JwtUtil;
import jakarta.persistence.NoResultException;
import jakarta.transaction.Transactional;
import org.apache.coyote.BadRequestException;
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

    @Transactional
    public List<GetUsuariosDtoResponse> getUsuarios () {
        List<Object[]> resultado = usuarioRepository.GetUsuarios();

        if (resultado.isEmpty()) {
            throw new BadCredentialsException("No se encontraron usuarios.");
        }


        return resultado.stream()
                .map(obj -> new GetUsuariosDtoResponse(
                        (Long) obj[0],
                        (String) obj[1],
                        (String) obj[2],
                        (String) obj[3]
                )).toList();
    }

    @Transactional
    public String actualizarUsuario(Long idusuario, ActualizarUsuarioDtoRequest request){
        UsuarioEntity usuario= usuarioRepository.findById(idusuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Long rolActual = usuario.getRol().getRolId();
        Long rolNuevo = request.getRolId();

        if(rolActual.equals(rolNuevo)){
            return "El usuario ya tiene ese rol";
        }

        usuarioRepository.actualizarUsuario(
                idusuario,
                request.getRolId()
        );
        return "Se actualizó correctamente";
    }

    @Transactional
    public void eliminarUsuario(long usuarioId){
        usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        usuarioRepository.eliminarUsuario(usuarioId);
    }
}
