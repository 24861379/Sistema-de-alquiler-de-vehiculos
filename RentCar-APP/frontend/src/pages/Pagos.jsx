function Pagos() {
    return (
        <div className="card mt-5 rounded-4">
            <div className="card-body Pagos">
                <div className="bg-white border-0 d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0 w-100">Pagos</h4>
                </div>

                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Alquiler</th>
                                <th>Cliente</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Método</th>
                                <th>Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Alquiler #001</td>
                                <td>Juan Pérez</td>
                                <td>350</td>
                                <td>2026-02-10</td>
                                <td>Tarjeta</td>
                                <td>Completado</td>
                            </tr>

                            <tr>
                                <td>Alquiler #002</td>
                                <td>María García</td>
                                <td>525</td>
                                <td>2026-02-12</td>
                                <td>Efectivo</td>
                                <td>Completado</td>
                            </tr>

                            <tr>
                                <td>Alquiler #003</td>
                                <td>Carlos López</td>
                                <td>385</td>
                                <td>2026-02-14</td>
                                <td>Transferencia</td>
                                <td>Pendiente</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
  );
}

export default Pagos;