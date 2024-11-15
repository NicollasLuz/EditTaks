import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

 
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>NicollasLuz.dev</span>
      </Link>
      <nav className={`${styles.menuSandwich} ${showMenu ? styles.show : ''}`} onClick={toggleMenu}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
      <div className={styles['switch-wrapper']}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            className={styles.input__check}
            checked={darkMode}
            onChange={toggleTheme}  
          />
          <span className={styles.slider} />
        </label>
      </div>
    </header>
  );
}

export default Header;  