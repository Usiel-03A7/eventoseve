import { useEffect, useState } from "react";
import styles from "./OptionItem.module.css";

export const OptionItem = ({ optionText, path, children }) => {
  const [isActive, setActive] = useState(false)

  const getActiveStyle = () => {
    return isActive ? styles.optionPanel__itemActive : '' 
  }
  
  useEffect(()=>{
    const currentPath = window.location.pathname

    if(currentPath === path) {
      setActive(true)
    }
  }, [])

  return(
    <>
      <div className={ `${styles.optionPanel__item} ${ getActiveStyle()}`}>
        <i>{ children }</i>
        <p>{ optionText }</p>
      </div>
    </>
  )
}