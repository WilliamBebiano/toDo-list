import { Circle, Trash , CheckCircle} from "@phosphor-icons/react";
import styles from './Tasks.module.css'
import PropTypes from 'prop-types';
import { useState } from "react";

export function Tasks(props) {
  
  const[isCompleted, setIsCompleted] = useState(false)

  const { task, onCompleteTask, onDeleteTask } = props;
  

  function handleCompleteTask() {
    onCompleteTask(task);
    setIsCompleted(!isCompleted);
    props.onClick(props.task.id, !isCompleted); // Chamando a função passada como prop
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }




  return(
    <div className={styles.wrapper}>
      <div className={styles.tasks} >
        <button className={styles.concluedTask} onClick={handleCompleteTask} >
        {isCompleted ? (
            <CheckCircle size={18} weight="duotone" />
          ) : (
            <Circle size={18} weight="duotone" />
          )}
          </button>
        <p className={isCompleted ? styles.strikethrough : ''} >{props.task}</p>
        <button className={styles.deleteTask} onClick={handleDeleteTask}> <Trash size={18} /></button>
      </div>
    </div>
  )
}

Tasks.propTypes = {
  task: PropTypes.string.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onClick:PropTypes.func.isRequired,
};
