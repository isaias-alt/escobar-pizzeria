import React from "react";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>This is the admin page</h1>
        <h2>Caja</h2>
        <h2>Manejo de productos</h2>
        <h2>Mirar clientes</h2>
        <h2>Crear roles</h2>
      </div>
    </>
  );
};

export default AdminPage;
