import { useEffect, useState } from 'react'
import styles from './OptionItem.module.css'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export const OptionItem = ({ optionText, path, children }) => {
  const [currentStyle, setCurrentStyle] = useState('')
  const location = useLocation()

  const getCurrentStyle = (currentPath) => {
    return currentPath === path && styles.optionPanel__itemActive
  }

  useEffect(() => {
    const currentPath = window.location.pathname
    setCurrentStyle(getCurrentStyle(currentPath))
  }, [location])

  return (
    <>
      <Link to={ path }>
        <div className={`${styles.optionPanel__item} ${currentStyle}`}>
          <i>{children}</i>
          <p>{optionText}</p>
        </div>
      </Link>
    </>
  )
}

OptionItem.propTypes = {
  optionText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
