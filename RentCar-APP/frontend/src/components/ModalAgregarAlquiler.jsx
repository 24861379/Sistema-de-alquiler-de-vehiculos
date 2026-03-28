import "../styles/style.css";

function ModalAgregarAlquiler() {
    return (
        <div className="modal fade" id="modalAgregarAlquiler" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Aaquileres</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <form>

                            <div className="mb-3">
                                <label className="form-label">Cliente</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Vehículo</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Fecha inicio</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Fecha fin</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Total</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <select className="form-select">
                                    <option disabled>Seleccionar...</option>
                                    <option>Pendiente</option>
                                    <option>Activo</option>
                                    <option>Completado</option>
                                    <option>Cancelado</option>
                                </select>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button type="button" className="btn btnCancelar me-2" data-bs-dismiss="modal">
                                    Cancelar
                                </button>

                                <button type="submit" className="btn btn-primary btnGuardar">
                                    Crear
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ModalAgregarAlquiler;