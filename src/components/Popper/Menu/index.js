import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultfn = () => {};

function Menu({ children, items = [], onChange = defaultfn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive={true}
      delay={[0, 500]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && ( // Khi có ít nhất 2 phần tử sẽ hiển thị MenuHeader
              <MenuHeader
                title={"Language"}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); // Xử lý logic back
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
