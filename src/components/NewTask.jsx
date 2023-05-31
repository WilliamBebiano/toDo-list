import {PlusCircle} from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask() {
  return(
    <div className={styles.wrapper}>
      <input placeholder='Adicione uma nova tarefa'/>
      <button>Criar 
        <PlusCircle size={24}>
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
    </div>
  )
}
