// import {ClipboardText  } from "@phosphor-icons/react";
import styles from './ListOfTasks.module.css'
import { Tasks } from "./Tasks";


export function ListOfTasks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.taskControls}>
        <p className={styles.createdTask}>Tarefas criadas <span>0</span></p>
        <p className={styles.concluedTask}>Concluidas <span>0</span></p>
      </div>
      <div className={styles.displayTasks} >
        {/* <div className={styles.emptyTasks}>
          <ClipboardText size={72} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> */}
        <Tasks/>
        <Tasks/>
        <Tasks/>
      </div>
    </div>
  )
}
