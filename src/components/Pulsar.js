import assert from '../lib/assert'
import styles from './Pulsar.module.scss'

export default function Pulsar({ size = 40, color = 'black', speed = 1.75 }) {
  assert('Pulsar', 'size', size, 'number')
  assert('Pulsar', 'color', color, 'string')
  assert('Pulsar', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    />
  )
}
