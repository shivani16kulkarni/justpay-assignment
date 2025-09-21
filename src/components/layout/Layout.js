import styles from './Layout.module.css';

const Layout = ({ children }) => {
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
          {children}
        </main>
      </div>
      <aside className={styles.rightSidebar}>
        Right Sidebar
      </aside>
    </div>
  );
};

export default Layout;