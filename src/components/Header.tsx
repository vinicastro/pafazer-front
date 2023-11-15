import styles from './Header.module.css'
import pafazerLogo from '../assets/pafazer-logo.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={pafazerLogo} alt="Logotipo da Pá Fazer"/>
        </header>
    )
}