import { Outlet } from 'react-router-dom'
import { Sidebar } from '../sidebar'
import styles from './Dashboard.module.css'

export const Dashboard = () => {
  return (
    <div className={styles.dashboard__container}>
      <Sidebar/>

      <div className={styles.activityContainer}>
        <Outlet />
      </div>
    </div>
  )
}
