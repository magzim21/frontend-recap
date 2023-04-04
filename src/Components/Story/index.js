import React from 'react'
import styles from './style.module.css'

const Story = ({text, children}) => {
  return (
    <div className={`${styles.wrapper} card`}>{text}{children}</div>
  )
}

export default Story