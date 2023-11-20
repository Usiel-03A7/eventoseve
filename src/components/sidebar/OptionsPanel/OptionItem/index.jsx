import styles from "./OptionItem.module.css";
import { Link } from 'react-router-dom';

export const OptionItem = ({ optionText, path, children, isActive }) => {

  const getActiveStyle = () => {
    return isActive ? styles.optionPanel__itemActive : ''
  }

  return (
    <Link to={path}>

      <div className={`${styles.optionPanel__item} ${getActiveStyle()}`}>
        <i>{children}</i>
        <p>{optionText}</p>
      </div>
    </Link>
  )
}