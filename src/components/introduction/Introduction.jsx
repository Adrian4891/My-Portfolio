import style from "./introduction.module.css";
import imgProfile from "../../images/fotoPerfil.jpg";

const Introduction = () => {
    return(
        <section className={style.container}>

            <div className={style.introduction}>
                
                <p className={style.capital}>Hola soy Ernesto desarrollador FullStack.
                    Con metas cumplidas, y varias por cumplir.
                </p>

                <p>
                En abril del año pasado, comencé en el mundo de la programación sin haber visto ni leído nada. Hoy siento que he aprendido muchísimo, me siento muy capaz para afrontar nuevos desafíos, siempre dándolo todo y un poco más.
                </p>

                <button className={style.btnDownload}> 
                    Descargar curriculum
                </button>
                
            </div>

            <div>
                <img  className={style.profileImg} src={imgProfile} alt="Imagen perfil"/>
            </div>
            
        </section>
    );
}

export default Introduction;