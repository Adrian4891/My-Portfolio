import style from "./experience.module.css";


const Experience = () => {
    return(
        <section id="experience">

            <article className={style.containerExperience}>
                <div className={style.titleExp}>
                    <h2>Experiencia</h2>
                </div>
                <div className={style.textExperience}>
                    <h4>Utn</h4>
                    <h5><b>Frontend 2022</b></h5>
                    <p>
                      Hice mi primer curso desde cero en abril del año pasado, orientado hacia la parte del Frontend. Fue una buena experiencia; aprendí mucho, pero sabía que necesitaba más.
                    </p>
                </div>
                <div className={style.textExperience}>
                    <h4>Henry</h4>
                    <h5>FullStack 2023</h5>
                    <p>
                      Empezando el 2023, me inscribí en Henry para el curso FullStack. Fue muy exigente y me gustó mucho; me enfoqué principalmente en la parte Backend.
                    </p>
                </div>
                <div className={style.textExperience}>
                    <h4>Proyectando</h4>
                    <h5> Autodidacta 2023...</h5>
                    <p> 
                      Hasta la fecha, estoy considerando la posibilidad de llevar a cabo más proyectos para afianzar lo que he aprendido. Además, planeo incorporar TypeScript y Next.js a mis habilidades.
                    </p>
                </div>  
            </article>
            
        </section>
    );
}

export default Experience;