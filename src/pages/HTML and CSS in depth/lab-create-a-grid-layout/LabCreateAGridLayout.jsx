import styles from "./projectStyles.module.css";

const LabCreateAGridLayout = () => {
  return (
    <div className="h-full flex justify-center px-4 py-2 bg-slate-200">
      <div className={`${styles.container} w-[700px] h-[500px]`}>
        <header className={styles.header}> Header </header>
        <main className={`${styles.main} bg-white`}> Content </main>
        <div className={`${styles.sidebar} ${styles.left}`}> Sidebar </div>
        <div className={`${styles.sidebar} ${styles.right}`}> Sidebar </div>
        <footer class={styles.footer}> Footer </footer>
      </div>
    </div>
  );
};

export default LabCreateAGridLayout;
