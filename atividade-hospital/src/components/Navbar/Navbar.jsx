import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">

        <Link to="/" className="logo">
          VidaPlus
        </Link>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/corpo-clinico">Corpo Clínico</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;