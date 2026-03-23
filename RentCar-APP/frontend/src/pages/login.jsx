import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService.js";
import "../styles/inicioSesion.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
    
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true);
      setAlert(null);

      try {
          const response = await login(
              {
                  email,
                  password
              });
          
          if (response.token) {
            //guarda token y rol en localStorage
            localStorage.setItem("usuario", JSON.stringify(response));
              /* localStorage.setItem("token", response.token);
              localStorage.setItem("rol", response.rol); */

              //mensaje de exito
            setAlert({ type: "success", message: "Login exitoso" });
            navigate("/dashboard");
          }
      } catch (error) {
          setAlert({ type: "danger", message: error.message });
      } finally {
          setLoading(false);
      }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="container">
        {/* alertas */}
        {alert && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`}>
            {alert.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setAlert(null)}
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Ingrese su correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="email@rentcar.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Ingrese su contraseña
            </label>

            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pe-5"
                id="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={togglePassword}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"
                    }`}
                ></i>
              </span>
            </div>
          </div>

          {/* BOTÓN */}
          <button type="submit" className="btn" disabled={loading}>
            {!loading ? (
              "Ingresar"
            ) : (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
              ></span>
            )}
          </button>
        </form>
      </div>
    </div>
    
  );
}

export default Login;