import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();

  const appClasses = `${styles.appContainer} ${isDark ? styles.dark : styles.light}`;

  return (
    <div className={appClasses}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1>Header</h1>
          <button onClick={toggleTheme} className={styles.themeButton}>
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
        <div className={styles.mainContent}>
          {children}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Layout;