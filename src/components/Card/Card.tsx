
import cx from "classnames";
import styles from "./Card.module.scss";
import TypeCard from '../../interfaces/components/Card.interface';

function Card({ className, children }: TypeCard) {
  return (
    <div className={cx(styles.Card, className)}>
      {children}
    </div>
  )
}

export default Card