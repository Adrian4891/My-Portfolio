import style from "./header.module.css";
import listImg from "../../images/lista.png"

const Header = ({menuHiden, setMenuHiden}) => {
    return(
        <header>
            <div className={style.containerHead} id="start">
                <h1>Porfolio Adrianer</h1>
                <img 
                src={listImg} 
                alt="Menu image" 
                className={style.menuIcon} 
                onClick={()=>setMenuHiden(!menuHiden)}
                />  
                <nav className={style.navBarDesktop}>
                    <ul>
                        <li>
                            <a href="#projects">Proyectos</a>
                        </li>
                        <li>
                            <a href="#experience">Experiencia</a>
                        </li>
                        <li>
                            <a href="#contact">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
