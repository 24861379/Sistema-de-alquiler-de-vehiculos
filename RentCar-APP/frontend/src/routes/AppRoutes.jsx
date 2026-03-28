import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Clientes";
import Vehiculos from "../pages/Vehiculos";
import Alquileres from "../pages/Alquileres";
import Pagos from "../pages/Pagos";
import Usuarios from "../pages/Usuarios";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* login */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* layout en sidebar */}
                <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/vehiculos" element={<Vehiculos />} />
                    <Route path="/alquileres" element={<Alquileres />} />
                    <Route path="/pagos" element={<Pagos />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;