import styles from './App.module.scss'
import Header from '../widgets/Header/Header'
import AppRouter from './AppRouter'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
