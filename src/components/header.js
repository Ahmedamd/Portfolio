import * as React from "react"
import { Link } from "gatsby";
import * as styles from "../components/index.module.css"




  const Header = () => (
    
    <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="#about" className={styles.navLink}>About</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="#work-experience" className={styles.navLink}>Work Experience</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="#projects" className={styles.navLink}>Projects</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="#resume" className={styles.navLink}>Download Resume</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="#contact" className={styles.navLink}>Contact</Link>
              </li>
            </ul>
          </nav>
  </header>
    
  );

  export default Header;