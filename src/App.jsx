import { Routes, Route } from "react-router-dom"
import NavBar from "./components/common/NavBar"
import Footer from "./components/common/Footer"
import Home from "./routes/Home"
import Login from "./routes/Login"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
