import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const UpdateVeiculo = () => {
  const { id } = useParams()

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

  useEffect(() => {
    axios
      .get("http://localhost:8081/veiculo/" + id)
      .then((res) => {
        console.log(res)
        setVeiculo(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleClick = (e) => {
    e.preventDefault()

    axios
      .put(`http://localhost:8081/veiculo/${id}`, veiculo)
      .then((_) => navigate("/veiculo"))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <h1>Formulário para Editar o Veículo</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            placeholder="ID"
            name="id"
            value={veiculo.id_veiculo}
            disabled
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Placa:</label>
          <input
            type="text"
            className="form-control"
            id="placa"
            placeholder="Placa do Veículo"
            name="placa"
            value={veiculo.placa}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Ano:</label>
          <input
            type="number"
            className="form-control"
            id="ano"
            placeholder="Ano do Veículo"
            name="ano"
            value={veiculo.ano}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Mensalidade:</label>
          <input
            type="number"
            className="form-control"
            id="mensalidade"
            placeholder="Mensalidade do Veículo"
            name="mensalidade"
            value={veiculo.mensalidade}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Proprietário ID:</label>
          <input
            type="number"
            className="form-control"
            id="fk_proprietario"
            placeholder="ID do Proprietário do Veículo"
            name="fk_proprietario"
            value={veiculo.fk_proprietario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">createdAt:</label>
          <input
            type="text"
            className="form-control"
            id="createdAt"
            placeholder="Data da criação"
            name="createdAt"
            value={new Date(veiculo.createdAt).toLocaleDateString()}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">updatedAt:</label>
          <input
            type="text"
            className="form-control"
            id="updatedAt"
            placeholder="Data de Alteração"
            name="updatedAt"
            value={new Date(veiculo.updatedAt).toLocaleDateString()}
            onChange={handleChange}
            disabled
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Alterar
        </button>
      </form>
      <div className="container d-flex justify-content-center">
        <Link to="/veiculo">Veja todos os veículos</Link>
      </div>
    </div>
  )
}

export default UpdateVeiculo
