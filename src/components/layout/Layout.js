import { useTheme } from '../../contexts/ThemeContext';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const themeClass = isDark ? styles.dark : styles.light;
  const themeButtonText = isDark ? 'Light' : 'Dark';

  return (
    <div className={`${styles.appContainer} ${themeClass}`}>
      <aside className={styles.sidebar}>
        Left Sidebar
      </aside>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <span>Header</span>
          <button onClick={handleThemeToggle} className={styles.themeButton}>
            {themeButtonText}
          </button>
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