import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../sidebar'
import styles from './Dashboard.module.css'
import { useEffect, useState } from 'react'
import { OutletTitle } from '../OutletTitle'
import { Calendar } from 'react-calendar'
import './Calendar.css'

export const Dashboard = () => {
  const location = useLocation()
  const [path, setCurrentPath] = useState('')
  const [title, setTitle] = useState('Loading title')

  const titleIndex = {
    '/': 'Calendar',
    '/inventory': 'Inventory',
    '/new_post': 'New Publication'
  }

  const getTitleByPath = (path) => {
    return titleIndex[path] || 'Title Not Found'
  }

  const handleCalendar = (value, event) => {
    // TODO: handle add event or show existing one
  }

  useEffect(() => {
    const currentPath = window.location.pathname
    setCurrentPath(currentPath)
    setTitle(getTitleByPath(currentPath))
  }, [location])

  return (
    <div className={styles.dashboard__container}>
      <Sidebar/>

      <div className={styles.activityContainer}>
        <OutletTitle title={ title }/>
        { path === '/' ? <Calendar onClickDay= {(v, e) => handleCalendar(v, e) } /> : <Outlet /> }
      </div>
    </div>
  )
}
