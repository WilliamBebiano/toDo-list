import toDoLogo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt='Logo do Aplicativo ToDO'/>
    </header>
  )
}
