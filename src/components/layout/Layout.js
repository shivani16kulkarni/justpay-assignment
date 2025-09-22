import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
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
      <Sidebar />
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
      <RightSidebar />
    </div>
  );
};

export default Layout;