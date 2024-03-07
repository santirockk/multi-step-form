import styles from "./Container.module.css"

export const Container = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  );
};


export const ContainerDesktop = ({children}) => {

  return (
    <div className={styles.container_desktop}>
      {children}
    </div>
  )



}