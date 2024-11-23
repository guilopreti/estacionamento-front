import Logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header-container">
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={Logo} alt="Estacionamento Logo" />
      </div>

      <div className="header-buttons-div">
        <button onClick={() => navigate("/proprietario")}>Proprietários</button>
        <button onClick={() => navigate("/veiculo")}>Veículos</button>
      </div>
    </header>
  )
}

export default Header
