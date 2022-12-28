import style from "./Header.module.css"
import todoLogo from "../assets/Logo.svg"

export function Header(){
    return(
        <header className={style.header}>
            <img src={todoLogo} alt="Logotipo do Ignite" />
        </header>
    )
}