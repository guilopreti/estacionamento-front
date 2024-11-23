import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListProprietario from "./components/Proprietario/ListProprietario"
import AddProprietario from "./components/Proprietario/AddProprietario"
import ReadProprietario from "./components/Proprietario/ReadProprietario"
import UpdateProprietario from "./components/Proprietario/UpdateProprietario"
import ListVeiculo from "./components/Veiculo/ListVeiculo"
import ReadVeiculo from "./components/Veiculo/ReadVeiculo"
import AddVeiculo from "./components/Veiculo/AddVeiculo"
import UpdateVeiculo from "./components/Veiculo/UpdateVeiculo"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/proprietario" element={<ListProprietario />} />
            <Route path="/addProprietario" element={<AddProprietario />} />
            <Route
              path="/readProprietario/:id"
              element={<ReadProprietario />}
            />
            <Route
              path="/updateProprietario/:id"
              element={<UpdateProprietario />}
            />

            <Route path="/veiculo" element={<ListVeiculo />} />
            <Route path="/addVeiculo" element={<AddVeiculo />} />
            <Route path="/readVeiculo/:id" element={<ReadVeiculo />} />
            <Route path="/updateVeiculo/:id" element={<UpdateVeiculo />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
