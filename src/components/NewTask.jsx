import {PlusCircle} from '@phosphor-icons/react'
import styles from './NewTask.module.css'
import { useState } from 'react'
import { ListOfTasks } from './ListOfTasks'

export function NewTask() {

  const [tasks, setTask] = useState([])
  
  
  const [newTasksInput, setNewTasksInput] = useState('')

  

  // funcao que adiciona um nova atividade
  function addNewTask(event) {
    event.preventDefault()

    const newTask = {
      id: tasks.length + 1,
      content:newTasksInput,
    }

    setTask([...tasks, newTask])

    setNewTasksInput('')
  
  }

  //funcao que segura todas as mudancas dentro do input
  function handleNewTaskInput(event) {
  event.preventDefault()
  
  event.target.setCustomValidity('')
  setNewTasksInput(event.target.value)

 }

 //funcao que segura o evento de publicar informacoes vazias

 function handleNewTaskInputInvalid(event){
  event.target.setCustomValidity('Este campo é obrigatorio')


 }

 function deleteTasks(taskToDelete) {
  const tasksWithoutDeleteOne = tasks.filter((task) => {
    return task !== taskToDelete
  });
  setTask(tasksWithoutDeleteOne)
}

const isNewTaskInputEmpty = newTasksInput.length === 0

  return(
   <div className={styles.containner}>
    <form onSubmit={addNewTask} className={styles.wrapper}>
      <input 
      name='tasks' 
      placeholder='Adicione uma nova tarefa'
      value={newTasksInput}
      onChange={handleNewTaskInput}
      onInvalid={handleNewTaskInputInvalid}
      required
      />
      
      <button 
      type='submit' 
      disabled={isNewTaskInputEmpty}
      
      >Criar 
        <PlusCircle size={24}>S
        <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
        </PlusCircle>
           
        </button>
    </form>
         <ListOfTasks tasks={tasks} onDeleteTask={deleteTasks}/>
            
 </div>
  )
}
