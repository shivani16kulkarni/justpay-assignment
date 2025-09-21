import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

function Dashboard() {
  return (
    <div className={`${styles.appContainer} ${styles.light}`}>
      <aside className={styles.sidebar}>
        Left Sidebar
      </aside>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          Header
        </header>
        <main className={styles.mainContent}>
          Main Content
        </main>
      </div>
      <aside className={styles.rightSidebar}>
        Right Sidebar
      </aside>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;