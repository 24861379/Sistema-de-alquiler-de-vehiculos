import { useNavigate } from "react-router-dom";
import ModalAgregarUsuario from "../components/ModalAgregarUsuario";
import "../styles/style.css";

function Usuarios() {
    return (
       <>
            <div className="card mt-5 rounded-4">
                <div className="card-body Usuarios">
                    <div className="bg-white border-0 d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0 w-100">Usuarios</h4>

                        <button className="btn btnPrimary" data-bs-toggle="modal" data-bs-target="#modalAgregarUsuario">
                            <i className="fas fa-plus me-2"></i> Agregar
                        </button>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th>Estado</th>
                                    <th className="text-center">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Carlos Pérez</td>
                                    <td>admin@rentcar.com</td>
                                    <td>Administrador</td>
                                    <td>Activo</td>
                                    <td className="text-center">
                                        <i className="fas fa-pen text-primary me-3"></i>
                                        <i className="fas fa-trash text-danger"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Pedro Martinez</td>
                                    <td>pedro@rentcar.com</td>
                                    <td>Empleado</td>
                                    <td>Activo</td>
                                    <td className="text-center">
                                        <i className="fas fa-pen text-primary me-3"></i>
                                        <i className="fas fa-trash text-danger"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Ana Rodriguez</td>
                                    <td>ana@rentcar.com</td>
                                    <td>Empleado</td>
                                    <td>Inactivo</td>
                                    <td className="text-center">
                                        <i className="fas fa-pen text-primary me-3"></i>
                                        <i className="fas fa-trash text-danger"></i>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                
            </div>

            <ModalAgregarUsuario />
        </>
  );
}

export default Usuarios;