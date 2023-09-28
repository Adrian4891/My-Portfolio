import style from './menuMobile.module.css';
import { BiSolidContact } from "react-icons/bi";
import { BsFillFileEarmarkCodeFill, BsRocketTakeoffFill } from "react-icons/bs";
import { TbArrowBigUpLines } from "react-icons/tb";

const MenuMobile = ({menuHiden, setMenuHiden}) => {
    
    return (
        <>
            <div className={menuHiden === false ? style.containerMenuMobile : style.containerMenuHiden}>
                <button className={style.buttonClose}>
                    <b onClick={()=>setMenuHiden(!menuHiden)}>X</b>
                </button>
                <nav className={style.navBarmovil}>
                    <ul onClick={()=>setMenuHiden(!menuHiden)}>
                        <li className={style.experiencias} >
                            <TbArrowBigUpLines/>
                            <a href="#start">Inicio</a>
                        </li>
                        <li className={style.experiencias} >
                            <BsFillFileEarmarkCodeFill/> 
                            <a href="#projects">Proyectos</a>
                        </li>
                        <li>
                            <BsRocketTakeoffFill/> 
                            <a  href="#experience">Experiencia</a>
                        </li>
                        <li>
                            <BiSolidContact/>
                            <a  href="#contact">Contacto</a>
                        </li>
                    </ul>
                </nav>         
            </div>

            <div 
            className={menuHiden === false ? style.overlay 
            : style.overlayHiden}
            onClick={()=>setMenuHiden(!menuHiden)}
            > </div> 
        </>
    );
}

export default MenuMobile;