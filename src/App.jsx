import { Routes, Route } from "react-router-dom";
import { Alert, Collapse } from "@mui/material";
import { AlertContext } from "./contexts/AlertContext";
import { useContext } from "react";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import AdminCRUD from "./routes/Admin/AdminCRUD";

function App() {
  const { alertText, alertSeverity, alertOpen } = useContext(AlertContext);

  return (
    <div className="flex min-h-screen flex-col justify-between overflow-x-hidden font-Poppins">
      {
        <Collapse
          in={alertOpen}
          className="fixed left-1/2 mt-5 -translate-x-1/2 shadow-lg"
        >
          <Alert severity={alertSeverity}>{alertText}</Alert>
        </Collapse>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="crud/*" element={<AdminCRUD />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
