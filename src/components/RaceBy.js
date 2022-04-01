import PropTypes from 'prop-types'
import styles from './RaceBy.module.scss'

export default function RaceBy({
  size = 80,
  color = 'black',
  lineWeight = 5,
  duration = 1.4,
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

RaceBy.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  duration: PropTypes.number,
}
