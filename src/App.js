import logo from './logo.svg';
import './App.css';
import styles from "./components/app.module.css";
function App() {
  return (
    <div className="App">
      <div className="header">
        <span className={styles.title}>Clean Page</span>
        <span className={styles.headerBtn}>Main</span>
        <span className={styles.headerBtn}>Info</span>
        <span className={styles.headerBtn}>Memo</span>
        <span className={styles.headerBtn}>Gallery</span>

      </div>
    </div>
  );
}

export default App;
