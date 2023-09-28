import style from "./skills.module.css";

const Skills = () => {
    return (
        <section id="habilidades" className={style.container}>

                <article className={style.containerSkills}>

                    <div className={style.listSkills}>

                       <h3>Habilidades principales</h3>

                       <div className={style.list}>
                          <p className={style.capitalList}><b>Fullstack Developer:</b></p>
                          <p className={style.technologies}>FrontEnd: Html, Css, Js, React, Redux</p>
                          <p className={style.technologies}>BackEnd: Node Js, Express</p>
                          <p className={style.technologies}>Db: Postgresql, Sequelize, FireBase</p>
                          <p className={style.technologies}>Frameworks: Bootstrap, Tailwind</p>
                        </div>
                    
                    </div>

                    <div className={style.listTools}>

                        <h3>Herramientas</h3>

                        <div className={style.list}>
                           <p className={style.capitalList}><b>Programacion</b></p>
                           <p className={style.technologies}>Git , Github, Visual Studio Code</p>
                           <p className={style.technologies}>Vercel, Railway, Netlify</p>

                        </div>
                         
                    </div>

                </article>

            </section>
    );
}

export default Skills;