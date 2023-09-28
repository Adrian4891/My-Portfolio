import style from "./contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={style.container}>
            <article className={style.containerContact}>
                <h2>¿Quieres contratarme...?</h2>
                <h2>Contáctame ya!!!</h2>
                <a href="mailto:ernestobarraza216@gmail.com">ernestobarraza216@gmail.com</a>
            </article>
        </section>    
    );
}

export default Contact;