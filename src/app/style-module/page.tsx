import styles from "./page.module.css";

export default function StyleModulePage() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Style module</h1>
      <p>Cette carte est stylée avec un CSS Module, scopé à ce composant.</p>
      <button className={styles.button}>Bouton</button>
    </div>
  );
}
