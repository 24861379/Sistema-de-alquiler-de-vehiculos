import ModalAgregarAlquiler from "../components/ModalAgregarAlquiler";

function Alquileres() {
    return (
        <>
            <div className="card mt-5">
                <div className="card-body Alquileres">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0 w-100">Alquileres</h4>

                        <button className="btn btnPrimary" data-bs-toggle="modal" data-bs-target="#modalAgregarAlquiler">
                            <i className="fas fa-plus me-2"></i> Agregar
                        </button>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Cliente</th>
                                    <th>Vehículo</th>
                                    <th>Fecha inicio</th>
                                    <th>Fecha fin</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th className="text-end">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Juan Pérez</td>
                                    <td>Toyota Corolla 2023</td>
                                    <td>2026-02-10</td>
                                    <td>2026-02-17</td>
                                    <td>350</td>
                                    <td><span className="badge success">Activo</span></td>
                                    <td className="text-end">
                                        <i className="fas fa-pen text-primary me-3"></i>
                                        <i className="fas fa-trash text-danger"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td>María García</td>
                                    <td>Honda CR-V 2024</td>
                                    <td>2026-02-12</td>
                                    <td>2026-02-19</td>
                                    <td>525</td>
                                    <td><span className="badge success">Activo</span></td>
                                    <td className="text-end">
                                        <i className="fas fa-pen text-primary me-3"></i>
                                        <i className="fas fa-trash text-danger"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Carlos López</td>
                                    <td>Mazda 3 2023</td>
                                    <td>2026-02-14</td>
                                    <td>2026-02-21</td>
                                    <td>385</td>
                                    <td><span className="badge warning">Pendiente</span></td>
                                    <td className="text-end">
                                        <i className="fas fa-pen text-primary me-3"></i>
                                        <i className="fas fa-trash text-danger"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ModalAgregarAlquiler />
        </>
  );
}

export default Alquileres;