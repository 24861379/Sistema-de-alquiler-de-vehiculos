import "../styles/style.css";

function ModalAgregarCliente() { 
    return (
        <div className="modal fade" id="modalAgregarCliente" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Cliente</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nombre completo</label>
                                    <input type="text" className="form-control" placeholder="Ej: Juan Pérez"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="correo@email.com"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" placeholder="555-0101"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Documento</label>
                                    <input type="text" className="form-control" placeholder="12345678A"/>
                                </div>

                            <div className="d-flex justify-content-end gap-2">
                                    <button type="button" className="btn btnCancelar me-2" data-bs-dismiss="modal">
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn btn-primary btnGuardar">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default ModalAgregarCliente;