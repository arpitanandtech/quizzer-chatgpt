import styles from "./Layout.module.scss";
import cx from 'classnames';
import { Battery50Icon, WifiIcon } from '@heroicons/react/24/solid'
import TypeLayout from "../../interfaces/Layout.interface";

function Layout({ children }: TypeLayout) {
  return (
    <div className={cx(styles.Layout, '')}>
      <div className={styles.Layout__NotchContainer}>
        <div className={cx(styles.Layout__NotchContainer__Network, "text-caption")}>airtel</div>
        <div className={styles.Layout__Notch}>
          <div className={styles.Layout__Notch__Camera}>
          </div>
        </div>
        <span>
          <Battery50Icon />
          <WifiIcon />
        </span>
      </div>
      {/* AppBar */}
      <div className="Layout__Body pb-2 pl-2 pr-2 pt-1">
        {children}
      </div>
    </div>
  )
}

export default Layout;