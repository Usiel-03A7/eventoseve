import "./../../assets/react.svg";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <> 
      <div className={styles.container}>
        <div>
          <img src="react.svg" alt="admin image" />
          <h3>Texto de prueba</h3>
        </div>
        <div>
          <div>
            <p>Calendario</p>
            <p>icono</p>
          </div>
          <div>
            <p>Inventario</p>
            <p>icono</p>
          </div>
          <div>
            <p>Nueva Publicacion</p>
            <p>icono</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
