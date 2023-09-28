import style from './footer.module.css';
import { BsLinkedin, BsTelegram , BsWhatsapp} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div >
                <p> <b>©</b> Copyright | Ernesto Barraza.</p>
            </div>

            <div className={style.iconContact}>
                <a href='https://github.com/Adrian4891'><BsLinkedin/></a> 
                <a href='https://github.com/Adrian4891'><BsTelegram/></a> 
                <a href='https://github.com/Adrian4891'><AiFillGithub/></a> 
                <a href='https://github.com/Adrian4891'><BsWhatsapp/></a>
            </div>
        </footer>

    );
}

export default Footer;