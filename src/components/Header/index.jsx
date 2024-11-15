import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>Gerenciador de Tarefas</span>
      </Link>
      <nav className={`${styles.menuSandwich} ${showMenu ? styles.show : ''}`} onClick={toggleMenu}>
        <Link to="/AdicionarTarefas">Adicionar Tarefas</Link>
        <Link to="/tarefas">Tarefas</Link>
      </nav>
    </header>
  );
}

export default Header;  