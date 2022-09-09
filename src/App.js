import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import Auditoria from "./pages/Auditoria";
import Caja from "./pages/Caja";
import Clientes from "./pages/Clientes";
import CompraVenta from "./pages/CompraVenta";
import CrearRoles from "./pages/CrearRoles";
import Estadisticas from "./pages/Estadisticas";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import RegistroProductos from "./pages/RegistroProductos";
import Reportes from "./pages/Reportes";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/aboutus" element={ <AboutUs /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/admin" element={ <AdminPage /> }/>
        <Route path="/caja" element={ <Caja /> }/>
        <Route path="/auditoria" element={ <Auditoria /> }/>
        <Route path="/clientes" element={ <Clientes /> }/>
        <Route path="/crearroles" element={ <CrearRoles /> }/>
        <Route path="/estadisticas" element={ <Estadisticas /> }/>
        <Route path="/registroproductos" element={ <RegistroProductos /> }/>
        <Route path="/reportes" element={ <Reportes /> }/>
        <Route path="/compraventa" element={ <CompraVenta /> }/>
      </Routes>
    </Router>
  );
}

export default App;
