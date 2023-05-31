import { Circle, Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css'

export function Tasks() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.tasks} >
        <button className={styles.concluedTask}><Circle size={18} weight="duotone" /></button>
        <p>Levar as criancas na piscina</p>
        <button className={styles.deleteTask}> <Trash size={18} /></button>
      </div>
    </div>
  )
}
