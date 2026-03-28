import "../styles/style.css";
import { useEffect, useState } from "react";
import ModalAgregarVehiculo from "../components/ModalAgregarVehiculo";
import ModalEditarVehiculo from "../components/ModalEditarVehiculo";
import VehiculoService from "../services/VehiculoService";
import VehicleService from "../services/VehiculoService";
function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [vehiculoEdit, setVehiculoEdit] = useState(null);
    const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

    const role = localStorage.getItem("currentRole") || "Empleado";

    // 🔹 cargar datos iniciales
    useEffect(() => {
        cargarDatos();
    }, []);

    const cargarDatos = async () => {
        try {
            const tiposData = await VehicleService.getTipos();
            const vehiculosData = await VehicleService.getAll();

            setTipos(tiposData);
            setVehiculos(vehiculosData);

        } catch (error) {
            console.error(error);
            mostrarMensaje("error", "Error al cargar datos");
        }
    };

    // 🔹 eliminar
    const eliminarVehiculo = async (id) => {
        if (!window.confirm("¿Está seguro de eliminar este vehículo?")) return;

        try {
            await VehicleService.remove(id);
            await cargarDatos();
            mostrarMensaje("success", "Vehículo eliminado correctamente");
        } catch (error) {
            console.error(error);
            mostrarMensaje("error", "Error al eliminar");
        }
    };

    // 🔹 abrir modal editar
    const abrirEditar = (veh) => {
        setVehiculoEdit(veh);

        const modal = new window.bootstrap.Modal(
            document.getElementById("modalEditarVehiculo")
        );
        modal.show();
    };

    const mostrarMensaje = (tipo, texto) => {
        setMensaje({ tipo, texto });
        setTimeout(() => setMensaje({ tipo: "", texto: "" }), 3000);
    };
  return (
    <>
            <div className="card mt-5 shadow-sm">
              <div className="card-body Vehiculos">

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="mb-0 w-100">Vehículos</h4>

                        <button className="btn btnPrimary" data-bs-toggle="modal" data-bs-target="#modalAgregarVehiculo">
                            <i className="fas fa-plus me-2"></i> Agregar
                        </button>
                    </div>

                    {/* MENSAJES */}
                    {mensaje.tipo === "success" && (
                        <div className="alert alert-success">
                            {mensaje.texto}
                        </div>
                    )}

                    {mensaje.tipo === "error" && (
                        <div className="alert alert-danger">
                            {mensaje.texto}
                        </div>
                    )}

                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Tipo</th>
                                    <th>Año</th>
                                    <th>Matrícula</th>
                                    <th>Puestos</th>
                                    <th>Precio/Día</th>
                                    <th>Estado</th>
                                    <th className="text-end">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {vehiculos.map((veh) => (
                                    <tr key={veh.id}>
                                        <td>{veh.marca}</td>
                                        <td>{veh.modelo}</td>
                                        <td>{veh.tipoVehiculo?.tipo}</td>
                                        <td>{veh.ano}</td>
                                        <td>{veh.placa}</td>
                                        <td>{veh.cantidadPuestos}</td>
                                        <td>${veh.costoDia}</td>
                                        <td>
                                            {veh.estado === "Disponible" ? (
                                                <span className="badge bg-success">Disponible</span>
                                            ) : (
                                                <span className="badge bg-danger">Alquilado</span>
                                            )}
                                        </td>
                                        <td className="text-end">
                                            <i
                                                className="fas fa-pen text-primary me-3"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => abrirEditar(veh)}
                                            ></i>

                                            {role === "Administrador" && (
                                                <i
                                                    className="fas fa-trash text-danger"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => eliminarVehiculo(veh.id)}
                                                ></i>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

            <ModalAgregarVehiculo
                tipos={tipos}
                onSuccess={cargarDatos}
                mostrarMensaje={mostrarMensaje}
            />

            <ModalEditarVehiculo
                tipos={tipos}
                vehiculo={vehiculoEdit}
                onSuccess={cargarDatos}
                mostrarMensaje={mostrarMensaje}
            />
        </>
  );
}

export default Vehiculos;