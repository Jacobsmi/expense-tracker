import Sidebar from '../components/sidebar'
import styles from '../styles/AddExpense.module.css'

const AddExpense = () =>{
    const submitClick = () =>{

    }
    return(
        <div id={styles.AddExpense}>
            <Sidebar active='add'></Sidebar>
            <div id={styles.Title}>Add an Expense</div>
            <div id={styles.FormContainer}>
                <label className={styles.FormLabel}>Name:</label><input className={styles.FormInput}></input><br />
                <label className={styles.FormLabel}>Amount:</label><input className={styles.FormInput}></input><br />
                <button id={styles.FormButton} onClick={submitClick}>Add</button>
            </div>
        </div>
    )
}

export default AddExpense;