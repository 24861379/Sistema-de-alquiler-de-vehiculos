// controller.js - manejador de la sección de vehículos conectado a API REST

let tiposVehiculo = []; // caché de tipos disponibles

async function initializeVehiculos() {
    const role = localStorage.getItem('currentRole') || 'Empleado';
    tiposVehiculo = await VehicleService.getTipos();
    populateTipoSelects();
    await renderVehicleTable(role);
    setupVehicleForms(role);
}

function populateTipoSelects() {
    const addTipoSelect = document.getElementById('addTipo');
    const editTipoSelect = document.getElementById('editTipo');
    
    [addTipoSelect, editTipoSelect].forEach(select => {
        if (!select) return;
        // Limpiar opciones existentes excepto la primera (placeholder)
        const placeholder = select.querySelector('option[disabled]') || select.options[0];
        select.innerHTML = '';
        if (placeholder) select.appendChild(placeholder);
        
        tiposVehiculo.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo.id;
            option.textContent = tipo.tipo;
            select.appendChild(option);
        });
    });
}

function setRole(rol) {
    localStorage.setItem('currentRole', rol);
    initializeVehiculos();
}

async function renderVehicleTable(role) {
    const tbody = document.getElementById('vehiculos-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const vehicles = await VehicleService.getAll();
    
    vehicles.forEach((veh) => {
        const tr = document.createElement('tr');
        const tipoNombre = veh.tipoVehiculo?.tipo || 'N/A';
        
        tr.innerHTML = `
            <td>${veh.marca}</td>
            <td>${veh.modelo}</td>
            <td>${tipoNombre}</td>
            <td>${veh.ano}</td>
            <td>${veh.placa}</td>
            <td>${veh.cantidadPuestos}</td>
            <td>$${veh.costoDia}</td>
            <td>${veh.estado === 'Disponible' ?
                '<span class="badge bg-success">Disponible</span>' :
                '<span class="badge bg-danger">Alquilado</span>'}
            </td>
            <td class="text-end">
                <i class="fas fa-pen text-primary me-3 btn-edit" data-id="${veh.id}" title="Editar"></i>
                ${role === 'Administrador'
                    ? `<i class="fas fa-trash text-danger btn-delete" data-id="${veh.id}" title="Eliminar"></i>`
                    : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-edit').forEach(el => {
        el.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            openEditModal(id, vehicles);
        });
    });

    if (role === 'Administrador') {
        tbody.querySelectorAll('.btn-delete').forEach(el => {
            el.addEventListener('click', async (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'));
                if (confirm('¿Está seguro de eliminar este vehículo?')) {
                    try {
                        await VehicleService.remove(id);
                        await renderVehicleTable(role);
                        showMessage(document.getElementById('mensajeExito'));
                    } catch (err) {
                        console.error(err);
                        showMessage(document.getElementById('mensajeError'));
                    }
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
        addForm.addEventListener('submit', async (ev) => {
            ev.preventDefault();
            try {
                const veh = getFormDataFromForm('add');
                await VehicleService.add(veh);
                await renderVehicleTable(role);
                showMessage(successAlert);
                addForm.reset();
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalAgregarVehiculo'));
                modal.hide();
            } catch (err) {
                console.error(err);
                showMessage(errorAlert);
            }
        });
    }

    if (editForm) {
        editForm.addEventListener('submit', async (ev) => {
            ev.preventDefault();
            try {
                const id = parseInt(document.getElementById('editIndex').value);
                const veh = getFormDataFromForm('edit');
                await VehicleService.update(id, veh);
                await renderVehicleTable(role);
                showMessage(successAlert);
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarVehiculo'));
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

function getFormDataFromForm(prefix) {
    const tipoId = parseInt(document.getElementById(prefix + 'Tipo').value) || 1;
    const tipoVehiculo = tiposVehiculo.find(t => t.id == tipoId);
    
    return {
        marca: document.getElementById(prefix + 'Marca').value.trim(),
        modelo: document.getElementById(prefix + 'Modelo').value.trim(),
        tipoVehiculo: tipoVehiculo || { id: tipoId },
        ano: parseInt(document.getElementById(prefix + 'Ano').value),
        placa: document.getElementById(prefix + 'Matricula').value.trim(),
        cantidadPuestos: parseInt(document.getElementById(prefix + 'Puestos').value),
        costoDia: parseFloat(document.getElementById(prefix + 'Precio').value),
        estado: document.getElementById(prefix + 'Estado').value
    };
}

async function openEditModal(id, vehicles) {
    const veh = vehicles.find(v => v.id === id);
    if (!veh) return;
    
    document.getElementById('editIndex').value = id;
    document.getElementById('editMarca').value = veh.marca;
    document.getElementById('editModelo').value = veh.modelo;
    document.getElementById('editTipo').value = veh.tipoVehiculo?.id || 1;
    document.getElementById('editAno').value = veh.ano;
    document.getElementById('editMatricula').value = veh.placa;
    document.getElementById('editPuestos').value = veh.cantidadPuestos;
    document.getElementById('editPrecio').value = veh.costoDia;
    document.getElementById('editEstado').value = veh.estado;
    
    const modal = new bootstrap.Modal(document.getElementById('modalEditarVehiculo'));
    modal.show();
}