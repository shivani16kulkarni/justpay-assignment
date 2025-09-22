import { useTheme } from '../../contexts/ThemeContext';
import styles from './RightSidebar.module.css';

const RightSidebar = () => {
  const { isDark } = useTheme();

  return (
    <aside className={`${styles.rightSidebar} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        Right Sidebar Content
      </div>
    </aside>
  );
};

export default RightSidebar;