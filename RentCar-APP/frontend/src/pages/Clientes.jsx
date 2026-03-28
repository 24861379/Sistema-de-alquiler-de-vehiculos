import { useNavigate } from "react-router-dom";
import ModalAgregarCliente from "../components/ModalAgregarCliente";
import "../styles/style.css";

function Clientes() {
    return (
        <div className="card mt-5">
            <div className="card-body Clientes">
                <div className="d-flex justify-content-between align-items-center mb-4 ">
                    <h4 className="mb-0 w-100">Clientes</h4>

                    <button className="btn btnPrimary" data-bs-toggle="modal" data-bs-target="#modalAgregarCliente">
                        <i className="fas fa-plus me-2"></i> Agregar
                    </button>
                </div>

                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Documento</th>
                                <th className="text-end">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Pérez</td>
                                <td>juan@email.com</td>
                                <td>555-0101</td>
                                <td>12345678A</td>
                                <td className="text-end">
                                    <i className="fas fa-pen text-primary me-3"></i>
                                    <i className="fas fa-trash text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>María García</td>
                                <td>maria@email.com</td>
                                <td>555-0102</td>
                                <td>87654321B</td>
                                <td className="text-end">
                                    <i className="fas fa-pen text-primary me-3"></i>
                                    <i className="fas fa-trash text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Carlos López</td>
                                <td>carlos@email.com</td>
                                <td>555-0103</td>
                                <td>45678912C</td>
                                <td className="text-end">
                                    <i className="fas fa-pen text-primary me-3"></i>
                                    <i className="fas fa-trash text-danger"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalAgregarCliente />
        </div>
        
    );
}

export default Clientes;