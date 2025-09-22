import {
  ChartPieSlice as ChartPieSliceIcon,
  ShoppingBagOpen as ShoppingBagOpenIcon,
  Folder as FolderNotchIcon,
  BookOpen as BookOpenIcon,
  IdentificationBadge as IdentificationBadgeIcon,
  IdentificationCard as IdentificationCardIcon,
  UsersThree as UsersThreeIcon,
  Notebook as NotebookIcon,
  ChatsTeardrop as ChatsTeardropIcon,
  CaretRight as CaretRightIcon,
  CaretDown as CaretDownIcon
} from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
import { useTheme } from '../../contexts/ThemeContext';
import brandLogo from '../../assets/brandLogo.png';

const Sidebar = () => {
  const { isDark } = useTheme();

  const sidebarClass = `${styles.sidebar} ${isDark ? styles.dark : styles.light}`;

  return (
    <aside className={sidebarClass}>
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

      <div className={styles.navigationGroup}>
        <h3 className={styles.sectionHeader}>Pages</h3>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <a href="/profile">
              <CaretRightIcon className={styles.leftArrow} />
              <IdentificationBadgeIcon className={styles.navigationIcon} />
              User Profile
            </a>
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