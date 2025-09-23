import { useTheme } from '../../contexts/ThemeContext';
import { useSidebar } from '../../hooks/useSidebar';
import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebar from './RightSidebar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();
  const {
    leftSidebarOpen,
    rightSidebarOpen,
    toggleLeftSidebar,
    toggleRightSidebar
  } = useSidebar();

  const contentWrapperStyle = {
    marginLeft: leftSidebarOpen ? 'var(--sidebar-width)' : '0',
    marginRight: rightSidebarOpen ? 'var(--right-sidebar-width)' : '0'
  };

  return (
    <div className={`${styles.appContainer} ${isDark ? styles.dark : styles.light}`}>
      <Sidebar isOpen={leftSidebarOpen} />

      <div className={styles.contentWrapper} style={contentWrapperStyle}>
        <Header
          onMenuClick={toggleLeftSidebar}
          onRightMenuClick={toggleRightSidebar}
          onThemeToggle={toggleTheme}
          isDark={isDark}
        />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>

      <RightSidebar isOpen={rightSidebarOpen} />
    </div>
  );
};

export default Layout;