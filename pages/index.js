import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import {useEffect, useState} from 'react'

export default function Home() {
  const [expenses, setExpenses] = useState([]);


  const getExpenses = async () =>{
    const resp = await fetch("/api/getexpenses",{
      method: 'GET'
    })
    const respJSON = await resp.json();
    setExpenses(respJSON.expenses);
  }

  useEffect(() => {
    getExpenses();
  }, [])

  return (
    <div id={styles.Home}>
      <Sidebar active='view'></Sidebar>
      <div id={styles.Title}>
        View Expenses
      </div>
      {expenses.map(expense=>{
        return(
          <div className='expense' key={expense.id}>
            {expense.name} -> $ {expense.amount}
          </div>
        )
      })}
    </div>
  )
}
