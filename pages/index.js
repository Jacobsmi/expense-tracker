import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div id={styles.Home}>
      <Sidebar active='view'></Sidebar>
      <div id={styles.Title}>
        View Expenses
      </div>
    </div>
  )
}
