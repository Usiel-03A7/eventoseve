import { useState } from 'react';
import style from './inventary.module.css';
const InventarioComponent = () => {

    const [numMesas, setNumMesas] = useState(0);
    const [numSillas, setNumSillas] = useState(0);
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
        </div>
    );
};

export default InventarioComponent;
