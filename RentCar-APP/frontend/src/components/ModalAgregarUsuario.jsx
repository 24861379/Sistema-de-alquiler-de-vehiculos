function ModalAgregarUsuario() {
    return (
        <div className="modal fade" id="modalAgregarUsuario" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Usuario</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <form>

                            <div className="mb-3">
                                <label className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Rol</label>
                                <select className="form-select">
                                    <option disabled>Seleccionar...</option>
                                    <option>Administrador</option>
                                    <option>Empleado</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <select className="form-select">
                                    <option disabled>Seleccionar...</option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
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
export default ModalAgregarUsuario;