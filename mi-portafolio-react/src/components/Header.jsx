import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div>
        <h1 id="p-porta">Portafolio Nahum V.G.</h1>
      </div>
      <nav>
        {location.pathname === '/' ? (
          <>
            <button onClick={() => scrollToSection('art-home')}>Inicio</button>
            <button onClick={() => scrollToSection('art-about')}>Sobre mí</button>
            <button onClick={() => scrollToSection('art-works')}>Proyectos</button>
            <button onClick={() => scrollToSection('art-contacts')}>Contactos</button>
          </>
        ) : (
          <>
            <Link to="/"><button>Inicio</button></Link>
            <Link to="/about"><button>Sobre mí</button></Link>
            <Link to="/works"><button>Proyectos</button></Link>
            <Link to="/contacts"><button>Contactos</button></Link>
          </>
        )}
      </nav>
    </header>
  );
}
