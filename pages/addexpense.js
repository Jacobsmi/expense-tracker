import Sidebar from '../components/sidebar'
import styles from '../styles/AddExpense.module.css'

const AddExpense = () =>{
    return(
        <div id='AddExpense'>
            <Sidebar active='add'></Sidebar>
            <div id={styles.Title}>Add an Expense</div>
        </div>
    )
}

export default AddExpense;