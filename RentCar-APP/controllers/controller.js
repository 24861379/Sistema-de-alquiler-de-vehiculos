// controller.js - manejador de la sección de vehículos

// trae dependencia de servicio definido en service.js
// funciones públicas:
//   initializeVehiculos() -> llamada cuando se carga la pestaña

function initializeVehiculos() {
    // simular rol actual; en una app real vendría del servidor/login
    const role = localStorage.getItem('currentRole') || 'Empleado';
    renderVehicleTable(role);
    setupVehicleForms(role);
}

/**
 * Cambia el rol actual y vuelve a renderizar la tabla (útil para pruebas)
 * @param {string} rol 'Administrador' o 'Empleado'
 */
function setRole(rol) {
    localStorage.setItem('currentRole', rol);
    initializeVehiculos();
}

function renderVehicleTable(role) {
    const tbody = document.getElementById('vehiculos-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const vehicles = VehicleService.getAll();
    vehicles.forEach((veh, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${veh.marca}</td>
            <td>${veh.modelo}</td>
            <td>${veh.tipo}</td>
            <td>${veh.ano}</td>
            <td>${veh.matricula}</td>
            <td>${veh.puestos}</td>
            <td>${veh.precio}</td>
            <td>${veh.estado === 'Disponible' ?
                '<span class="badge bg-success">Disponible</span>' :
                '<span class="badge bg-danger">Alquilado</span>'}
            </td>
            <td class="text-end">
                <i class="fas fa-pen text-primary me-3 btn-edit" data-index="${idx}" title="Editar"></i>
                ${role === 'Administrador'
                    ? `<i class="fas fa-trash text-danger btn-delete" data-index="${idx}" title="Eliminar"></i>`
                    : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });

    // attach listeners after rows are inserted
    tbody.querySelectorAll('.btn-edit').forEach(el => {
        el.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            openEditModal(index);
        });
    });
    if (role === 'Administrador') {
        tbody.querySelectorAll('.btn-delete').forEach(el => {
            el.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
                if (confirm('¿Está seguro de eliminar este vehículo?')) {
                    VehicleService.remove(index);
                    renderVehicleTable(role);
                }
            });
        });
    }
}

function setupVehicleForms(role) {
    const addForm = document.getElementById('formAgregarVehiculo');
    const editForm = document.getElementById('formEditarVehiculo');
    const successAlert = document.getElementById('mensajeExito');
    const errorAlert = document.getElementById('mensajeError');

    if (addForm) {
        addForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            try {
                const veh = getFormData('add');
                VehicleService.add(veh);
                renderVehicleTable(role);
                showMessage(successAlert);
                addForm.reset();
                // cerrar modal
                const modalEl = document.getElementById('modalAgregarVehiculo');
                const modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();
            } catch (err) {
                console.error(err);
                showMessage(errorAlert);
            }
        });
    }

    if (editForm) {
        editForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            try {
                const index = parseInt(document.getElementById('editIndex').value, 10);
                const veh = getFormData('edit');
                VehicleService.update(index, veh);
                renderVehicleTable(role);
                showMessage(successAlert);
                const modalEl = document.getElementById('modalEditarVehiculo');
                const modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();
            } catch (err) {
                console.error(err);
                showMessage(errorAlert);
            }
        });
    }
}

function showMessage(element) {
    if (!element) return;
    element.classList.remove('d-none');
    setTimeout(() => element.classList.add('d-none'), 3000);
}

function getFormData(prefix) {
    return {
        marca: document.getElementById(prefix + 'Marca').value.trim(),
        modelo: document.getElementById(prefix + 'Modelo').value.trim(),
        tipo: document.getElementById(prefix + 'Tipo').value,
        ano: document.getElementById(prefix + 'Ano').value,
        matricula: document.getElementById(prefix + 'Matricula').value.trim(),
        puestos: document.getElementById(prefix + 'Puestos').value,
        precio: document.getElementById(prefix + 'Precio').value,
        estado: document.getElementById(prefix + 'Estado').value
    };
}

function openEditModal(index) {
    const veh = VehicleService.getAll()[index];
    if (!veh) return;
    document.getElementById('editIndex').value = index;
    document.getElementById('editMarca').value = veh.marca;
    document.getElementById('editModelo').value = veh.modelo;
    document.getElementById('editTipo').value = veh.tipo;
    document.getElementById('editAno').value = veh.ano;
    document.getElementById('editMatricula').value = veh.matricula;
    document.getElementById('editPuestos').value = veh.puestos;
    document.getElementById('editPrecio').value = veh.precio;
    document.getElementById('editEstado').value = veh.estado;
    const modalEl = document.getElementById('modalEditarVehiculo');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

// para pruebas: inicializar algunas filas si no hay
(function seed() {
    if (VehicleService.getAll().length === 0) {
        VehicleService.add({marca:'Toyota', modelo:'Corolla', tipo:'Sedán', ano:2023, matricula:'ABC-1234', puestos:5, precio:50, estado:'Disponible'});
        VehicleService.add({marca:'Chevrolet', modelo:'Tracker', tipo:'SUV', ano:2022, matricula:'XYZ-456', puestos:5, precio:65, estado:'Alquilado'});
    }
})();