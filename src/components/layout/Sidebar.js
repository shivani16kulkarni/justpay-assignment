import {
  ChartPieSlice,
  ShoppingBagOpen,
  Folder,
  BookOpen,
  IdentificationBadge,
  IdentificationCard,
  UsersThree,
  Notebook,
  ChatsTeardrop,
  CaretRight,
  CaretDown
} from '@phosphor-icons/react';

import { useState } from 'react';
import styles from './Sidebar.module.css';
import { useTheme } from '../../contexts/ThemeContext';
import brandLogo from '../../assets/brandLogo.png';

const Sidebar = ({ isOpen }) => {
  const { isDark } = useTheme();
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  const handleUserProfileClick = () => {
    setUserProfileOpen(!userProfileOpen);
  };

  return (
    <aside
      className={`${styles.sidebar} ${isDark ? styles.dark : styles.light}`}
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <div className={styles.logoBrandingGroup}>
        <img src={brandLogo} alt="ByeWind" className={styles.logo} />
        <span className={styles.brandText}>ByeWind</span>
      </div>

      <div className={styles.navigationGroup}>
        <div className={styles.favoritesContainer}>
          <a href="/favorites" className={`${styles.favoriteLink} ${styles.activeFavoriteLink}`}>Favorites</a>
          <a href="/recently" className={`${styles.favoriteLink} ${styles.inactiveFavoriteLink}`}>Recently</a>
        </div>
        <ul className={styles.navigationList}>
          <li className={styles.favoriteItem}>
            <a href="/overview">
              <div className={styles.dotIcon}></div>
              Overview
            </a>
          </li>
          <li className={styles.favoriteItem}>
            <a href="/projects">
              <div className={styles.dotIcon}></div>
              Projects
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.navigationGroup}>
        <h3 className={styles.sectionHeader}>Dashboards</h3>
        <ul className={styles.navigationList}>
          <li className={`${styles.navigationItem} ${styles.activeItem}`}>
            <a href="/dashboards/default">
              <ChartPieSlice className={`${styles.navigationIcon} ${styles.alignedNavigationIcon}`} />
              Default
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/dashboards/ecommerce">
              <CaretRight className={styles.leftArrow} />
              <ShoppingBagOpen className={styles.navigationIcon} />
              eCommerce
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/projects">
              <CaretRight className={styles.leftArrow} />
              <Folder className={styles.navigationIcon} />
              Projects
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/courses">
              <CaretRight className={styles.leftArrow} />
              <BookOpen className={styles.navigationIcon} />
              Online Courses
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.navigationGroup}>
        <h3 className={styles.sectionHeader}>Pages</h3>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <button onClick={handleUserProfileClick} className={styles.expandableItem}>
              {userProfileOpen ? (
                <CaretDown className={styles.leftArrow} />
              ) : (
                <CaretRight className={styles.leftArrow} />
              )}
              <IdentificationBadge className={styles.navigationIcon} />
              User Profile
            </button>
            {userProfileOpen && (
              <ul className={styles.submenu}>
                <li><a href="/profile/overview" className={styles.submenuItem}>Overview</a></li>
                <li><a href="/profile/projects" className={styles.submenuItem}>Projects</a></li>
                <li><a href="/profile/campaigns" className={styles.submenuItem}>Campaigns</a></li>
                <li><a href="/profile/documents" className={styles.submenuItem}>Documents</a></li>
                <li><a href="/profile/followers" className={styles.submenuItem}>Followers</a></li>
              </ul>
            )}
          </li>
          <li className={styles.navigationItem}>
            <a href="/account">
              <CaretRight className={styles.leftArrow} />
              <IdentificationCard className={styles.navigationIcon} />
              Account
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/corporate">
              <CaretRight className={styles.leftArrow} />
              <UsersThree className={styles.navigationIcon} />
              Corporate
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/blog">
              <CaretRight className={styles.leftArrow} />
              <Notebook className={styles.navigationIcon} />
              Blog
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/social">
              <CaretRight className={styles.leftArrow} />
              <ChatsTeardrop className={styles.navigationIcon} />
              Social
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;