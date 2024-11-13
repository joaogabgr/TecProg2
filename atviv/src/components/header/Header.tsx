import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const toggleMenu = () => {
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        if (nav) {
            nav.classList.toggle('closed');
            nav.classList.toggle('open');
        }
        if (header) {
            header.classList.toggle('open');
            header.classList.toggle('closed');
        }
    }

  return (
    <header className="header closed">
      <div className="headerMenu">
        <p>Atlastis</p>
        <FontAwesomeIcon className="buttonMenu" icon={faBars} onClick={toggleMenu}/>
      </div>
      <nav className="closed">
        <a href="/">Inicio</a>
        <a href="/#Clientes">Clientes</a>
        <a href="/#Acomodacao">Acomodações</a>
        <a href="/#Hospetagem">Hospetagem</a>
      </nav>
    </header>
  );
}
