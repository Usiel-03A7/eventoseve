import { useState, useEffect } from 'react';
import style from './inventary.module.css';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const mesasInve = async () => {
    try {
        const inventarioSnapshot = await getDocs(collection(db, 'inventario'));
        if (!inventarioSnapshot.empty) {
            const inventarioData = inventarioSnapshot.docs[0].data();
            return inventarioData.mesas;
        }
    } catch (error) {
        console.error('Error al obtener el inventario:', error.message);
    }
};

export const sillasInve = async () => {
    try {
        const inventarioSnapshot = await getDocs(collection(db, 'inventario'));
        if (!inventarioSnapshot.empty) {
            const inventarioData = inventarioSnapshot.docs[0].data();
            return inventarioData.sillas;
        }
    } catch (error) {
        console.error('Error al obtener el inventario:', error.message);
    }
};

const InventarioComponent = () => {
    const [numMesas, setNumMesas] = useState(0);
    const [numSillas, setNumSillas] = useState(0);

    useEffect(() => {
        const obtenerInventario = async () => {
            try {
                const inventarioSnapshot = await getDocs(collection(db, 'inventario'));
                if (!inventarioSnapshot.empty) {
                    const inventarioData = inventarioSnapshot.docs[0].data();
                    setNumMesas(inventarioData.mesas);
                    setNumSillas(inventarioData.sillas);
                }
            } catch (error) {
                console.error('Error al obtener el inventario:', error.message);
            }
        };

        obtenerInventario();
    }, []); // Se ejecutará solo una vez al montar el componente

    const guardarInventario = async () => {
        try {
            const docRef = await addDoc(collection(db, 'inventario'), {
                mesas: numMesas,
                sillas: numSillas,
            });

            console.log('Documento agregado con ID:', docRef.id);
        } catch (error) {
            console.error('Error al agregar el documento:', error.message);
        }
    };

    return (
        <div className={style.container}>
            <h2>Título del Inventario</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <label>Mesas:</label>
                    <input type="number" value={numMesas} onChange={(e) => setNumMesas(e.target.valueAsNumber)} />
                </div>
                <div>
                    <label>Sillas:</label>
                    <input type="number" value={numSillas} onChange={(e) => setNumSillas(e.target.valueAsNumber)} />
                </div>
            </div>
            <div>
                <h3>Selección Actual</h3>
                <p>Mesas: {numMesas}</p>
                <p>Sillas: {numSillas}</p>
            </div>
            <button onClick={guardarInventario}>Guardar en Inventario</button>
        </div>
    );
};

export default InventarioComponent;
