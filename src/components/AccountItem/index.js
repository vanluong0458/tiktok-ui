import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5998875075b915dba41f22d45b11caa~c5_100x100.jpeg?x-expires=1671415200&x-signature=BDD5Uy6fxjvJ3xurejc1h7HHi%2FU%3D"
        alt="Hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
