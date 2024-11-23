import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const ReadVeiculo = () => {
  const { id } = useParams()

  const [veiculo, setVeiculo] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8081/veiculo/" + id)
      .then((res) => {
        setVeiculo(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Detalhes do Veículo</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Placa</th>
                <th>Ano</th>
                <th>Mensalidade</th>
                <th>Proprietário ID</th>
                <th>Data Cadastro</th>
                <th>Data Alteração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{veiculo.id_veiculo}</td>
                <td>{veiculo.placa} </td>
                <td>{veiculo.ano} </td>
                <td>{veiculo.mensalidade} </td>
                <td>{veiculo.fk_proprietario} </td>
                <td>{new Date(veiculo.createdAt).toLocaleDateString()}</td>
                <td>{new Date(veiculo.updatedAt).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
          <div className="container d-flex justify-content-center">
            <Link to="/veiculo">Veja todos os veículos</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadVeiculo
