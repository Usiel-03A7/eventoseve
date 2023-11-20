import { Sidebar } from './components/sidebar'
import './App.css'
import { Scheduler } from '@aldabil/react-scheduler'
import { Routes, Route, Outlet } from 'react-router-dom';

function Layout() {
  return <div className='container'>
    <Sidebar />
    <div className="container-calendar">
      <Outlet />

    </div>

  </div>
}

function App() {

  return (
    <Routes>

      <Route exact path="/" element={<Layout />} >
        <Route index element={<Scheduler />} />
        <Route path="inventary" element={<h1>Inventario En proceso</h1>} />
        <Route path="newpub" element={<h1>Nueva no aplica para beta</h1>} />
      </Route>

    </Routes>



  )
}

export default App
