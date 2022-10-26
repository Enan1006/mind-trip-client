import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddPackage from "./pages/Dashboard/AddPackage";
import AddBlog from "./pages/Dashboard/AddBlog";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./pages/Shared/Navbar";
import PublicRoutes from "./routes/PublicRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "light" : "halloween"}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        {
          PublicRoutes.map(({ path, Component }) => <Route path={path} element={<Component />}></Route>)
        }
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<AddPackage />}></Route>
          <Route path="add-blog" element={<AddBlog />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
