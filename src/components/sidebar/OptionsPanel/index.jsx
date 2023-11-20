import styles from "./OptionsPanel.module.css";

export const OptionsPanel = ({ children }) => {
  return (
    <>
      <div className={styles.optionPanel__container}>
        {children}
      </div>
    </>
  )
}