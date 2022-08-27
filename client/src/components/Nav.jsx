import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from '../styles/Nav.module.css'

export function Nav({handleClick}) {
  return (
    <nav className={styles.container}>
      <SearchBar />
      <button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Recargar</button>
      <Link to="/create"><button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Crear Nuevo</button></Link>
      <Link to="/"><button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Inicio</button></Link>
    </nav>
  );
}

export default Nav;

// import React from "react";
// import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";
// import styles from '../styles/Nav.module.css'

// export function Nav({handleClick}) {
//   return (
//     <nav className={styles.container}>
//       <SearchBar />
//       <button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Reload Videogames</button>
//       <Link to="/create"><button onClick={(e) => {handleClick(e)}} className={styles.buttons}>Create Videogame</button></Link>
//     </nav>
//   );
// }

// export default Nav;
