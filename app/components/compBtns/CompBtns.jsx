'use client'

import styles from './compBtns.module.css'

const CompButton = ({ text, fn }) => {
  return (
    <button
      className={styles.btnRE}
      onClick={fn}>
      {text}
    </button>
  )
}

export default CompButton