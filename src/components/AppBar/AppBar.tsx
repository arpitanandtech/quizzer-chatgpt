import styles from "./AppBar.module.scss";
import { BellAlertIcon } from "@heroicons/react/24/solid";

function AppBar() {
  return (
    <div className={styles.AppBar}>
      <p className="h6">Welcome</p>
      <span>
        <BellAlertIcon />
      </span>
    </div>
  )
}

export default AppBar