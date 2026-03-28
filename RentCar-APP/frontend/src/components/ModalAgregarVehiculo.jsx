function ModalAgregarVehiculo() {
    return (
        <div className="modal fade" id="modalAgregarVehiculo" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Agregar vehículo</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <form id="formAgregarVehiculo">

                            <div className="mb-3">
                                <label className="form-label">Marca</label>
                                <input type="text" id="addMarca" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Modelo</label>
                                <input type="text" id="addModelo" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tipo</label>
                                <select id="addTipo" className="form-select">
                                    <option disabled>Seleccionar...</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Año</label>
                                <input type="number" id="addAno" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Matrícula</label>
                                <input type="text" id="addMatricula" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Cantidad de puestos</label>
                                <input type="number" id="addPuestos" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Precio por día</label>
                                <input type="number" id="addPrecio" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <select id="addEstado" className="form-select">
                                    <option disabled>Seleccionar...</option>
                                    <option>Disponible</option>
                                    <option>Alquilado</option>
                                </select>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button type="button" className="btn btnCancelar me-2" data-bs-dismiss="modal">
                                    Cancelar
                                </button>

                                <button type="submit" className="btn btnGuardar">
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

export default ModalAgregarVehiculo;