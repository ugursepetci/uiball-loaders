import PropTypes from 'prop-types'
import styles from './LineWobble.module.scss'

export default function LineWobble({
  size = 80,
  color = 'black',
  lineWeight = 5,
  duration = 1.75,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-duration': duration + 's',
      }}
    />
  )
}

LineWobble.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  duration: PropTypes.number,
}