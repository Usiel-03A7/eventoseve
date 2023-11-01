import styles from './OutletTitle.module.css'
import PropTypes from 'prop-types'

export const OutletTitle = ({ title }) => {
  return (
    <div className={ styles.outletTitle__Container }>
      <h1>{ title }</h1>
    </div>
  )
}

OutletTitle.propTypes = {
  title: PropTypes.string.isRequired
}
