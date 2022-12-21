import { Routes, Route } from "react-router-dom"
import { Alert, Collapse } from "@mui/material"
import { AlertContext } from "./contexts/AlertContext"
import { useContext } from "react"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Admin from "./routes/Admin"
import CRUD from "./routes/Admin/CRUD"

function App() {

  const { alertText, alertSeverity, alertOpen } = useContext(AlertContext)

  return (
    <div className="App">
      {
        <Collapse in={alertOpen} className='alert'>
          <Alert severity={alertSeverity}>{alertText}</Alert>
        </Collapse>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path=":name" element={<CRUD />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
