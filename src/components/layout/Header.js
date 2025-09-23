import { MagnifyingGlass, Bell, Sidebar, Star, Sun, ClockCounterClockwise } from '@phosphor-icons/react';
import styles from './Header.module.css';

const Header = ({ onMenuClick, onRightMenuClick, onThemeToggle, isDark }) => {
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : ''}`}>
      <div className={styles.leftSide}>
        <div className={styles.iconGroup}>
          <button className={styles.iconButton} onClick={onMenuClick}>
            <div className={styles.iconContainer}>
              <Sidebar className={styles.icon} size={20} />
            </div>
          </button>
          <button className={styles.iconButton}>
            <div className={styles.iconContainer}>
              <Star className={styles.icon} size={20} />
            </div>
          </button>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.route}>
            <span className={styles.routePrefix}>Dashboards</span>
            <span className={styles.routePrefix}>/ </span>
            <span className={styles.routeCurrent}>Default</span>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.searchContainer}>
          <MagnifyingGlass className={styles.searchIcon} size={16} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.iconButtonsContainer}>
          <button className={styles.iconButton} onClick={onThemeToggle}>
            <div className={styles.iconContainer}>
              <Sun className={styles.icon} size={20} />
            </div>
          </button>
          <button className={styles.iconButton}>
            <div className={styles.iconContainer}>
              <ClockCounterClockwise className={styles.icon} size={20} />
            </div>
          </button>
          <button className={styles.iconButton}>
            <div className={styles.iconContainer}>
              <Bell className={styles.icon} size={20} />
            </div>
          </button>
          <button className={styles.iconButton} onClick={onRightMenuClick}>
            <div className={styles.iconContainer}>
              <Sidebar className={styles.icon} size={20} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;