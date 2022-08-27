import React from "react";
import styles from '../styles/Home.module.css'
// import Sound from "./Sound";
import { Link } from 'react-router-dom';



export default function Header(){

    return (
        
        <nav className={styles.navBar}>
            <div>
            <h3 className={styles.title}>Bienvenidos PI VideoJuegos 2022</h3>
            <br />
            <Link to='/home'>
            <button className={styles.buttonPlay}>Ingresar</button>
           </Link>
           </div>
        </nav>
    )
}

// import React from "react";
// import styles from '../styles/Home.module.css'
// import Sound from "./Sound";


// export default function Header(){

//     return (
//         <nav className={styles.navBar}>
//             <h1 className={styles.title}>The Videogames Cave</h1><Sound/>
//         </nav>
//     )
// }