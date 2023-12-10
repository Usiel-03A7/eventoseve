import { Sidebar } from './components/sidebar';
import './App.css';
import { Scheduler } from '@aldabil/react-scheduler';
import { Routes, Route, Outlet } from 'react-router-dom';
import { db } from './firebase/config';
import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import Inventary from './components/inventary';

function Layout() {
  return (
    <div className='container'>
      <Sidebar />
      <div className="container-calendar">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  const [events, setEvents] = useState([]);

  const getevents = () => {
    return onSnapshot(collection(db, 'eventos'), (snapshot) => {
      const documents = snapshot.docs.map((doc) => {
        const data = doc.data();
        data.start = data.start.toDate();
        data.end = data.end.toDate();
        data.event_id = doc.id;
        return data;
      });
      setEvents(documents);
    });
  };

  useEffect(() => {
    const cancel = getevents();
    return cancel;
  }, []);

  // Función para calcular el costo total
  const calculateTotalCost = (event) => {
    const { sillas, costoSillas, mesas, costoMesas } = event;
    const costoSillasTotal = sillas * costoSillas;
    const costoMesasTotal = mesas * costoMesas;
    const costoTotal = costoSillasTotal + costoMesasTotal;
    return costoTotal;
  };

  // Función para generar un ticket (puedes personalizar según tus necesidades)
  const generateTicket = (event, costoTotal) => {
    alert(`¡Ticket generado!\nEvento: ${event.title}\nCosto total: $${costoTotal}`);
  };

  return (
    <Routes>
      <Route exact path="/" element={<Layout />} >
        <Route index element={<Scheduler
          events={events}
          translations={{
            // ... (código existente)
          }}
          week={{
            startHour: 0,
            endHour: 24,
          }}
          day={{
            startHour: 0,
            endHour: 24,
          }}
          onConfirm={async (event, action) => {
            console.log('ACTION', action);
            if (action === 'create') {
              const docRef = await addDoc(collection(db, 'eventos'), event);
              event.event_id = docRef.id;
            } else {
              setDoc(doc(db, 'eventos', event.event_id), event);
            }

            // Calcular costo total
            const costoTotal = calculateTotalCost(event);

            // Generar ticket
            generateTicket(event, costoTotal);

            return event;
          }}
          onDelete={async (event_id) => {
            await deleteDoc(doc(db, 'eventos', event_id));
            return event_id;
          }}
          fields={[
            {
              name: "sillas",
              type: "input",
              config: { label: "Sillas", required: true, min: 1, max: Infinity, variant: "outlined", decimal: true },
            },
            {
              name: "costoSillas",
              type: "input",
              config: { label: "Costo por silla", required: true, variant: "outlined", decimal: true },
            },
            {
              name: "mesas",
              type: "input",
              config: { label: "Mesas", required: true, min: 1, max: Infinity, variant: "outlined", decimal: true },
            },
            {
              name: "costoMesas",
              type: "input",
              config: { label: "Costo por mesa", required: true, variant: "outlined", decimal: true },
            },
            {
              name: "Información ",
              type: "input",
              config: { label: "Información", required: true, variant: "outlined" },
            }
          ]}
        />} />
        <Route path="inventary" element={<Inventary />} />
        <Route path="newpub" element={<h1>Nueva no aplica para beta</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
