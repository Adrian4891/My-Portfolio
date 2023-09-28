import style from "./projects.module.css";
import imgPruebas from "../../images/barek.png";
import imgPrincipe from "../../images/triviarApp.png";
import imgSlacker from "../../images/smallApps.png";
import imgTiendita from "../../images/rickandmortyApp.png";

const Project = () => {

    return(
        <section id="projects" className={style.containerProjects}>

            <article className={style.barek}>
                <img src={imgPruebas} alt="Imagen proyecto"/>
                <div className={style.barekDescription}>
                    <div className={style.project}>
                        <h3>BarekMusic Ecommerce</h3>
                        <p className={style.description}>
                          BarekMusic es un E-commerce de instrumentos, ideal para quienes aman la música. Puedes buscar tu primer instrumento o, si ya eres músico, las mejores marcas
                        </p>
                        <div className={style.watchButtons}>
                          <button 
                          className={style.watchProject}
                          onClick={()=>window.location.href = `https://barek-intruments-app.vercel.app/`}
                          >Ver proyecto</button>
                          <button 
                          className={style.watchCode}
                          onClick={()=>window.location.href = `https://github.com/Adrian4891/BarekIntrumentsApp`}
                          >Ver código</button>
                        </div>
                    </div>
                </div>
            </article>

            <article className={style.rickAndMorty}>
                <img src={imgTiendita} alt="Imagen proyecto"/>
                <div className={style.rickAndMortyDescripcion}>
                    <div className={style.project}>
                        <h3>Rick And Morty App</h3>
                        <p className={style.description}>
                           Rick And Morty App, fue mi primer app FullStack. En ella podras buscar 
                           el personaje que tú gustes, crearlo, o agregarlo a tu lista de favoritos.
                        </p>
                        <div className={style.watchButtons}>
                            <button 
                            className={style.watchProject}
                            onClick={()=>window.location.href = `https://app-rick-and-morty-chi.vercel.app`}
                            >Ver proyecto</button>
                            <button 
                            className={style.watchCode}
                            onClick={()=>window.location.href = `https://github.com/Adrian4891/AppRickAndMorty`}
                            >Ver código</button>
                        </div>
                    </div>
                </div>
            </article>

            <article className={style.smallApps}>
                <img src={imgSlacker} alt="Imagen proyecto"/>
                <div className={style.smallAppsDescripcion}>
                    <div className={style.project}>
                        <h3>Mis primeras Apps</h3>
                        <p className={style.description}>
                          Siempre, cuando uno comienza, trata de demostrarse a sí mismo y a los demás que puede lograrlo. Estas aplicaciones son un ejemplo de ello. 
                        </p>
                        <div className={style.watchButtons}>
                            <button 
                            className={style.watchProject}
                            onClick={
                                ()=>window.location.href = `https://adrian4891.github.io/Caculadora-matematica/`
                            }
                            >Ver proyecto</button>
                            <button 
                            className={style.watchCode}
                            onClick={
                                ()=>window.location.href = `https://github.com/Adrian4891/Caculadora-matematica`
                            }
                            >Ver código</button>
                        </div>
                    </div>  
                </div>
            </article>

            <article className={style.triviar}>
                <img src={imgPrincipe} alt="imagen proyecto"/>
                <div className={style.triviarDescripcion}>
                    <div className={style.project}>
                        <h3>Triviar app</h3>
                        <p className={style.description}>
                        Triviar es una aplicación en la que tengo pensado ir más allá. Aún no puedo describirlo en detalle. 😄
                        </p>
                        <div className={style.watchButtons}>
                            <button className={style.watchProject}>Ver proyecto</button>
                            <button className={style.watchCode}>Ver código</button>
                        </div>
                    </div>
                </div>
            </article>
        
        </section>

    );
}

export default Project;