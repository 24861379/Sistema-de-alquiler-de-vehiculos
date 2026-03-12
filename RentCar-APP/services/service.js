// simple in-browser storage for vehicles
const VehicleService = (() => {
    const STORAGE_KEY = 'vehicles';

    function getAll() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }

    function saveAll(list) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }

    function add(vehicle) {
        const list = getAll();
        list.push(vehicle);
        saveAll(list);
        return vehicle;
    }

    function update(index, vehicle) {
        const list = getAll();
        if (index < 0 || index >= list.length) throw new Error('Índice inválido');
        list[index] = vehicle;
        saveAll(list);
        return vehicle;
    }

    function remove(index) {
        const list = getAll();
        if (index < 0 || index >= list.length) throw new Error('Índice inválido');
        list.splice(index, 1);
        saveAll(list);
    }

    return { getAll, add, update, remove };
})();