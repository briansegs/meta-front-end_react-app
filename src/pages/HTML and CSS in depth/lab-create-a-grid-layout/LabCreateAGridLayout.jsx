import styles from "./projectStyles.module.css";

const LabCreateAGridLayout = () => {
  return (
    <div className="w-full">
      <div className={styles.container}>
        <header className={styles.header}> Header </header>
        <main className={styles.main}> Content </main>
        <div className={`${styles.sidebar} ${styles.left}`}> Sidebar </div>
        <div className={`${styles.sidebar} ${styles.right}`}> Sidebar </div>
        <footer class={styles.footer}> Footer </footer>
      </div>
    </div>
  );
};

export default LabCreateAGridLayout;
