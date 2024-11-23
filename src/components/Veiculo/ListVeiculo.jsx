import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const ListVeiculo = () => {
  const [veiculos, setVeiculos] = useState([])

  //Listar Veiculos
  useEffect(() => {
    axios
      .get("http://localhost:8081/veiculo")
      .then((res) => setVeiculos(res.data))
      .catch((err) => console.log(err))
  }, [])

  //Deletar Veiculos
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/veiculo/${id}`)
      .then((_) => window.location.reload())
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">
        Listando Veículos
      </h2>
      <div className="row">
        <div className="col-md-12">
          <p>
            <Link to="/addVeiculo" className="btn btnsuccess btn-add">
              Adicionar novo Veículo
            </Link>
          </p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Placa</th>
                <th>Ano</th>
                <th>Mensalidade</th>
                <th>Proprietário ID</th>
                <th>Data Cadastro</th>
                <th>Data Alteração</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {veiculos.map((veiculo) => {
                return (
                  <tr key={veiculo.id_veiculo}>
                    <td>{veiculo.id_veiculo}</td>
                    <td>{veiculo.placa} </td>
                    <td>{veiculo.ano} </td>
                    <td>{veiculo.mensalidade} </td>
                    <td>{veiculo.fk_proprietario} </td>
                    <td>{new Date(veiculo.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(veiculo.updatedAt).toLocaleDateString()}</td>
                    <td className="actions-td">
                      <Link
                        to={`/readVeiculo/${veiculo.id_veiculo}`}
                        className="btn btn-success mx2"
                      >
                        Ler
                      </Link>
                      <Link
                        to={`/updateVeiculo/${veiculo.id_veiculo}`}
                        className="btn btn-info mx2"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(veiculo.id_veiculo)}
                        className="btn btndanger"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListVeiculo
