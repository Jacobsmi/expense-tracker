import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'

const Sidebar = (props) =>{
    var elements = [
        {
            path: '/',
            label: 'View Expenses',
            selected: props.active == 'view'
        }, {
            path: '/addexpense',
            label: 'Add an Expense',
            selected: props.active == 'add'
        }
    ]
    return(
        <div id={styles.SideBar}>
            <div id={styles.SideBarTitle}>
                Expense Tracker
            </div>
            {elements.map(element =>{
                return(
                    <Link href={element.path} className={styles.SideBarLink}>
                        <div className={`${styles.SideBarContainer} ${element.selected ? styles.activeLink : ''}`}>
                            {element.label}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar;