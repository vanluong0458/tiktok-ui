import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
  return (
    <header className={cx("menu-header")}>
      <button className={cx("btn-back")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("menu-header-title")}>{title}</h4>
    </header>
  );
}

export default MenuHeader;
