import { useState } from 'react';
import {
  ChartPieSliceIcon,
  ShoppingBagOpenIcon,
  FolderNotchIcon,
  BookOpenIcon,
  IdentificationBadgeIcon,
  IdentificationCardIcon,
  UsersThreeIcon,
  NotebookIcon,
  ChatsTeardropIcon,
  CaretRightIcon,
  CaretDownIcon
} from '@phosphor-icons/react';
import { useTheme } from '../../contexts/ThemeContext';
import brandLogo from '../../assets/brandLogo.png';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { isDark } = useTheme();
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  const handleUserProfileClick = () => {
    setUserProfileOpen(!userProfileOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.logoBrandingGroup}>
        <img src={brandLogo} alt="ByeWind" className={styles.logo} />
        <span className={styles.brandText}>ByeWind</span>
      </div>

      <div className={`${styles.navigationGroup} ${styles.favoritesGroup}`}>
        <div className={styles.favoritesContainer}>
          <a href="/favorites" className={`${styles.favoriteLink} ${styles.activeFavoriteLink}`}>
            Favorites
          </a>
          <a href="/recently" className={`${styles.favoriteLink} ${styles.inactiveFavoriteLink}`}>
            Recently
          </a>
        </div>
        <ul className={styles.navigationList}>
          <li className={styles.favoriteItem}>
            <a href="/overview">
              <div className={styles.dotIcon}></div>
              <span className={styles.favoriteText}>Overview</span>
            </a>
          </li>
          <li className={styles.favoriteItem}>
            <a href="/projects">
              <div className={styles.dotIcon}></div>
              <span className={styles.favoriteText}>Projects</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.navigationGroup} ${styles.dashboardsGroup}`}>
        <h3 className={styles.sectionHeader}>Dashboards</h3>
        <ul className={styles.navigationList}>
          <li className={`${styles.navigationItem} ${styles.activeItem}`}>
            <a href="/dashboards/default">
              <ChartPieSliceIcon className={`${styles.navigationIcon} ${styles.alignedNavigationIcon}`} />
              Default
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/dashboards/ecommerce">
              <CaretRightIcon className={styles.leftArrow} />
              <ShoppingBagOpenIcon className={styles.navigationIcon} />
              eCommerce
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/projects">
              <CaretRightIcon className={styles.leftArrow} />
              <FolderNotchIcon className={styles.navigationIcon} />
              Projects
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/courses">
              <CaretRightIcon className={styles.leftArrow} />
              <BookOpenIcon className={styles.navigationIcon} />
              Online Courses
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.navigationGroup} ${styles.pagesGroup}`}>
        <h3 className={styles.sectionHeader}>Pages</h3>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <button onClick={handleUserProfileClick}>
              {userProfileOpen ?
                <CaretDownIcon className={styles.leftArrow} /> :
                <CaretRightIcon className={styles.leftArrow} />
              }
              <IdentificationBadgeIcon className={styles.navigationIcon} />
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
              <CaretRightIcon className={styles.leftArrow} />
              <IdentificationCardIcon className={styles.navigationIcon} />
              Account
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/corporate">
              <CaretRightIcon className={styles.leftArrow} />
              <UsersThreeIcon className={styles.navigationIcon} />
              Corporate
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/blog">
              <CaretRightIcon className={styles.leftArrow} />
              <NotebookIcon className={styles.navigationIcon} />
              Blog
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="/social">
              <CaretRightIcon className={styles.leftArrow} />
              <ChatsTeardropIcon className={styles.navigationIcon} />
              Social
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;