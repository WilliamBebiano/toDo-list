import { ClipboardText } from "@phosphor-icons/react";
import styles from './ListOfTasks.module.css'
import { Tasks } from "./Tasks";
import PropTypes from 'prop-types';
import { useState } from "react";

export function ListOfTasks(props) {
  const { tasks, onDeleteTask } = props;

  const [completedTasks, setCompletedTasks] = useState([]);
  const [concludedTaskCount, setConcludedTaskCount] = useState(0);

  function handleCompleteTask(task) {
    if (completedTasks.includes(task)) {
      setCompletedTasks(completedTasks.filter((completedTask) => completedTask !== task));
      setConcludedTaskCount(concludedTaskCount - 1);
    } else {
      setCompletedTasks([...completedTasks, task]);
      setConcludedTaskCount(concludedTaskCount + 1);
    }
  }

  function handleDeleteTask(task) {
    
    const isTaskCompleted = completedTasks.includes(task);
    const updatedCompletedTasks = completedTasks.filter((completedTask) => completedTask !== task);
    const updatedConcludedTaskCount = isTaskCompleted ? concludedTaskCount - 1 : concludedTaskCount;
  
    setCompletedTasks(updatedCompletedTasks);
    setConcludedTaskCount(updatedConcludedTaskCount);
  
    
    onDeleteTask(task);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.taskControls}>
        <p className={styles.createdTask}>Tarefas criadas <span>{tasks.length}</span></p>
        <p className={styles.concluedTask}>Concluídas <span>{concludedTaskCount} de {tasks.length}</span></p>
      </div>
      <div className={styles.displayTasks}>
        {tasks.length === 0 ? (
          <div className={styles.emptyTasks}>
            <ClipboardText size={72} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => (
            <Tasks
              key={task.id}
              task={task.content}
              onDeleteTask={() => onDeleteTask(task)}
              onCompleteTask={handleCompleteTask}
              isCompleted={completedTasks.includes(task)}
              onToggle={handleDeleteTask}
            />
          ))
        )}
      </div>
    </div>
  )
}

ListOfTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
