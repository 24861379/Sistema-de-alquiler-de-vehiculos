function ModalEditarVehiculo() {
    return (
        <div className="modal fade" id="modalEditarVehiculo" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Editar vehículo</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <form id="formEditarVehiculo">

                            <input type="hidden" id="editIndex" />

                            <div className="mb-3">
                                <label className="form-label">Marca</label>
                                <input
                                    type="text"
                                    id="editMarca"
                                    className="form-control"
                                    defaultValue="Toyota"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Modelo</label>
                                <input
                                    type="text"
                                    id="editModelo"
                                    className="form-control"
                                    defaultValue="Corolla"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tipo</label>
                                <select id="editTipo" className="form-select">
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Año</label>
                                <input
                                    type="number"
                                    id="editAno"
                                    className="form-control"
                                    defaultValue="2023"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Matrícula</label>
                                <input
                                    type="text"
                                    id="editMatricula"
                                    className="form-control"
                                    defaultValue="ABC-1234"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Cantidad de puestos</label>
                                <input
                                    type="number"
                                    id="editPuestos"
                                    className="form-control"
                                    defaultValue="5"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Precio por día</label>
                                <input
                                    type="number"
                                    id="editPrecio"
                                    className="form-control"
                                    defaultValue="50"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <select id="editEstado" className="form-select">
                                    <option>Disponible</option>
                                    <option>Alquilado</option>
                                </select>
                            </div>

                            <div className="text-end">
                                <button type="button" className="btn btnCancelar me-2" data-bs-dismiss="modal">
                                    Cancelar
                                </button>

                                <button type="submit" className="btn btnGuardar">
                                    Guardar cambios
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ModalEditarVehiculo;