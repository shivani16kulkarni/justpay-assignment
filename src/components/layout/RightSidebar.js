import { Bug, UserCircle, Radio } from '@phosphor-icons/react';
import styles from './RightSidebar.module.css';
import { useTheme } from '../../contexts/ThemeContext';

import activityIconOne from '../../assets/activities/one.png';
import activityIconTwo from '../../assets/activities/two.png';
import activityIconThree from '../../assets/activities/three.png';
import activityIconFour from '../../assets/activities/four.png';
import activityIconFive from '../../assets/activities/five.png';

import contactIconOne from '../../assets/contacts/one.png';
import contactIconTwo from '../../assets/contacts/two.png';
import contactIconThree from '../../assets/contacts/three.png';
import contactIconFour from '../../assets/contacts/four.png';
import contactIconFive from '../../assets/contacts/five.png';
import contactIconSix from '../../assets/contacts/six.png';

const ICON_SIZE = 16;
const ICON_COLOR = '#1C1C1C';

const RightSidebar = ({ isOpen }) => {
  const { isDark } = useTheme();

  return (
    <aside
      className={`${styles.rightSidebar} ${isDark ? styles.dark : ''}`}
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
    >
      <div className={styles.sidebarContent}>
        <div className={`sidebar-group ${styles.firstGroup}`}>
          <div className={styles.headingContainer}>
            <div className={styles.groupHeading}>
              Notifications
            </div>
          </div>
          <div className={styles.notificationsList}>
            <div className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                <Bug size={ICON_SIZE} color={ICON_COLOR} />
              </div>
              <div className={styles.notificationTextGroup}>
                <div className={styles.notificationTextFirst}>You have a bug that needs to be fixed.</div>
                <div className={styles.notificationTextSecond}>Just Now</div>
              </div>
            </div>
            <div className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                <UserCircle size={ICON_SIZE} color={ICON_COLOR} />
              </div>
              <div className={styles.notificationTextGroup}>
                <div className={styles.notificationTextFirst}>New user registered</div>
                <div className={styles.notificationTextSecond}>59 minutes ago</div>
              </div>
            </div>
            <div className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                <Bug size={ICON_SIZE} color={ICON_COLOR} />
              </div>
              <div className={styles.notificationTextGroup}>
                <div className={styles.notificationTextFirst}>You have a bug that needs ...</div>
                <div className={styles.notificationTextSecond}>12 hours ago</div>
              </div>
            </div>
            <div className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                <Radio size={ICON_SIZE} color={ICON_COLOR} />
              </div>
              <div className={styles.notificationTextGroup}>
                <div className={styles.notificationTextFirst}>Andi Lane subscribed to you</div>
                <div className={styles.notificationTextSecond}>Today, 11:59AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`sidebar-group ${styles.secondGroup}`}>
          <div className={styles.activitiesHeadingContainer}>
            <div className={styles.activitiesHeading}>
              Activities
            </div>
          </div>
          <div className={styles.activitiesList}>
            <div className={styles.activityTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.activityIcon}>
                  <img src={activityIconOne} alt="Activity 1" className={styles.activityIconImage} />
                </div>
                <div className={styles.activityTextGroup}>
                  <div className={styles.activityTextFirst}>Activity 1</div>
                  <div className={styles.activityTextSecond}>Description 1</div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.activityIcon}>
                  <img src={activityIconTwo} alt="Activity 2" className={styles.activityIconImage} />
                </div>
                <div className={styles.activityTextGroup}>
                  <div className={styles.activityTextFirst}>Activity 2</div>
                  <div className={styles.activityTextSecond}>Description 2</div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.activityIcon}>
                  <img src={activityIconThree} alt="Activity 3" className={styles.activityIconImage} />
                </div>
                <div className={styles.activityTextGroup}>
                  <div className={styles.activityTextFirst}>Activity 3</div>
                  <div className={styles.activityTextSecond}>Description 3</div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.activityIcon}>
                  <img src={activityIconFour} alt="Activity 4" className={styles.activityIconImage} />
                </div>
                <div className={styles.activityTextGroup}>
                  <div className={styles.activityTextFirst}>Activity 4</div>
                  <div className={styles.activityTextSecond}>Description 4</div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.activityIcon}>
                  <img src={activityIconFive} alt="Activity 5" className={styles.activityIconImage} />
                </div>
                <div className={styles.activityTextGroup}>
                  <div className={styles.activityTextFirst}>Activity 5</div>
                  <div className={styles.activityTextSecond}>Description 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`sidebar-group ${styles.thirdGroup}`}>
          <div className={styles.contactsHeadingContainer}>
            <div className={styles.contactsHeading}>
              Contacts
            </div>
          </div>
          <div className={styles.contactsList}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={contactIconOne} alt="Natali Craig" className={styles.contactIconImage} />
              </div>
              <div className={styles.contactText}>Natali Craig</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={contactIconTwo} alt="Drew Cano" className={styles.contactIconImage} />
              </div>
              <div className={styles.contactText}>Drew Cano</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={contactIconThree} alt="Orlando Diggs" className={styles.contactIconImage} />
              </div>
              <div className={styles.contactText}>Orlando Diggs</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={contactIconFour} alt="Andi Lane" className={styles.contactIconImage} />
              </div>
              <div className={styles.contactText}>Andi Lane</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={contactIconFive} alt="Kate Morrison" className={styles.contactIconImage} />
              </div>
              <div className={styles.contactText}>Kate Morrison</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={contactIconSix} alt="Koray Okumus" className={styles.contactIconImage} />
              </div>
              <div className={styles.contactText}>Koray Okumus</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;