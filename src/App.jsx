import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { ListOfTasks } from './components/ListOfTasks'


function App() {
 

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask/>
        <ListOfTasks/>
      </div>
    </div>
  )
}

export default App
