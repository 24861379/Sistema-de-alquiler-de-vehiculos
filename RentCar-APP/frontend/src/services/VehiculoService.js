// API REST service para vehículos conectado a Backend
const VehicleService = (() => {
    const API_URL = 'http://localhost:9080/api/vehiculos';
    const TIPO_API_URL = 'http://localhost:9080/api/tipos-vehiculo';

    async function getAll() {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (err) {
            console.error('Error al obtener vehículos:', err);
            return [];
        }
    }

    async function add(vehicle) {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicle)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (err) {
            console.error('Error al crear vehículo:', err);
            throw err;
        }
    }

    async function update(id, vehicle) {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicle)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (err) {
            console.error('Error al actualizar vehículo:', err);
            throw err;
        }
    }

    async function remove(id) {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
        } catch (err) {
            console.error('Error al eliminar vehículo:', err);
            throw err;
        }
    }

    async function getTipos() {
        try {
            const res = await fetch(TIPO_API_URL);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (err) {
            console.error('Error al obtener tipos:', err);
            return [];
        }
    }

    return { getAll, add, update, remove, getTipos };
})();

export default VehicleService;