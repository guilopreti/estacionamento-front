import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const AddVeiculo = () => {
  const [veiculo, setVeiculo] = useState({
    placa: "",
    ano: "",
    mensalidade: "",
    fk_proprietario: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setVeiculo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = (e) => {
    e.preventDefault()

    axios
      .post("http://localhost:8081/veiculo", veiculo)
      .then((_) => navigate("/veiculo"))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">
        Adicionando Veículo
      </h2>
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label"> Placa:</label>
              <input
                type="text"
                className="form-control"
                id="placa"
                placeholder="Digite a Placa do Veículo"
                name="placa"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Ano:</label>
              <input
                type="number"
                className="form-control"
                id="ano"
                placeholder="Digite o Ano do Veículo"
                name="ano"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Mensalidade:</label>
              <input
                type="number"
                className="form-control"
                id="mensalidade"
                placeholder="Digite a Mensalidade do Veículo"
                name="mensalidade"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Proprietário ID:</label>
              <input
                type="number"
                className="form-control"
                id="fk_proprietario"
                placeholder="Digite o ID do Proprietário do Veículo"
                name="fk_proprietario"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Cadastrar
            </button>
            <br />
            <Link to="/veiculo">Listar Veículos</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddVeiculo
