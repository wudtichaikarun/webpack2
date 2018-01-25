import React from 'react'
import Hi from './Hi'
import styles from './Root.scss'

function getMessage() {
  let msg = 'hello world'
  debugger
  return 'Romantic'
}

export default() => (
  <div>
    <input type="text"/>
    <h1 className={styles.hello}>{getMessage()}</h1>
    <Hi />
    <div>Hello world</div>
  </div>
)