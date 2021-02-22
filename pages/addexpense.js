import Sidebar from '../components/sidebar'
import styles from '../styles/AddExpense.module.css'

const AddExpense = () =>{
    const submitClick = async () =>{
        // Reset Errors
        document.getElementById('nameError').innerHTML = '';
        document.getElementById('amountError').innerHTML = '';

        // Get inputs
        const name = document.getElementById("NameInput").value;
        const amount = document.getElementById("AmountInput").value;

        // Validate values from inputs
        const nameRegex = /^.{1,50}$/.test(name);
        const amountRegex = /^\$?[0-9]+(\.[0-9][0-9])?$/.test(amount);

        // If all values are good
        if (nameRegex && amountRegex){
            const result = await fetch("/api/addexpense",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    amount: amount
                })
            });

            const resp_data = await result.json();
            if (resp_data.status == 'success'){
                document.getElementById('status').innerHTML = 'Added Successfully';
            }else if(resp_data.status === 'conn-error'){
                document.getElementById('status').innerHTML = 'Error connecting to DB';
            }else if(resp_data.status === 'insert-error'){
                document.getElementById('status').innerHTML = 'Error inserting the data';
            }
            setTimeout(() => {  document.getElementById('status').innerHTML = ''; }, 2000);
        }
        // If name is not valid display error
        if(!nameRegex){
            document.getElementById('nameError').innerHTML = 'Invalid Name';
        }
        // If amount is not valid display an error
        if(!amountRegex){
            document.getElementById('amountError').innerHTML = 'Invalid Amount';
        }
    }
    return(
        <div id={styles.AddExpense}>
            <Sidebar active='add'></Sidebar>
            <div id={styles.Title}>Add an Expense</div>
            <div id={styles.FormContainer}>
                <label className={styles.FormLabel}>Name:</label><input className={styles.FormInput} id='NameInput'></input><br />
                <div id='nameError'></div>
                <label className={styles.FormLabel}>Amount:</label><input className={styles.FormInput} id='AmountInput'></input><br />
                <div id='amountError'></div>
                <button id={styles.FormButton} onClick={submitClick}>Add</button>
                <div id='status'></div>
            </div>
        </div>
    )
}

export default AddExpense;