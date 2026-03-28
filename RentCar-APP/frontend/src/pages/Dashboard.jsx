import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Dashboard() {
    return (
        /* container-fluid */
        <div className="container-fluid">

            <div className="mb-4">
                <h2 className="fw-bold">Dashboard</h2>
                <p className="text-muted">Resumen general del sistema de alquiler</p>
            </div>

            <div className="row g-4 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card dashboard-card shadow-sm border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <small className="text-muted">Total Clientes </small>
                                <h3 className="fw-bold mb-0">248</h3>
                            </div>
                            <div className="icon-box Cliente">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card dashboard-card shadow-sm border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <small className="text-muted">Vehículos</small>
                                <h3 className="fw-bold mb-0">42</h3>
                            </div>
                            <div className="icon-box Vehiculo">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card dashboard-card shadow-sm border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <small className="text-muted">Alquileres Activos</small>
                                <h3 className="fw-bold mb-0">18</h3>
                            </div>
                            <div className="icon-box Alquiler">
                                <i className="fa-solid fa-file-lines"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card dashboard-card shadow-sm border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <small className="text-muted">Ingresos del Mes</small>
                                <h3 className="fw-bold mb-0">$12,450</h3>
                            </div>
                            <div className="icon-box Ingreso">
                                <i className="fa-solid fa-dollar-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card mt-5 runded-4">
                <div className="card-body Dashboard">
                    <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-4">Alquileres Recientes</h5>
                    </div>
                    
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>CLIENTE</th>
                                    <th>VEHÍCULO</th>
                                    <th>FECHA</th>
                                    <th>ESTADO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Juan Pérez</td>
                                    <td>Toyota Corolla 2023</td>
                                    <td>2026-02-10</td>
                                    <td><span className="badge success px-3 py-2">Activo</span></td>
                                </tr>
                                <tr>
                                    <td>María García</td>
                                    <td>Honda CR-V 2024</td>
                                    <td>2026-02-12</td>
                                    <td><span className="badge success px-3 py-2">Activo</span></td>
                                </tr>
                                <tr>
                                    <td>Carlos López</td>
                                    <td>Mazda 3 2023</td>
                                    <td>2026-02-14</td>
                                    <td>
                                        <span className="badge warning px-3 py-2">Pendiente</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};


export default Dashboard;