import TooltipTippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Images";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      // children là cấp
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English", // Phải đặt title
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/profile",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  const handleMenuOnchange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="TikTok" />

        {/* Search */}
        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <TooltipTippy
                content="Upload video"
                placement="bottom"
                delay={[0, 50]}
              >
                <button className={cx("btn-action")}>
                  <UploadIcon />
                </button>
              </TooltipTippy>
              <TooltipTippy
                content="Messages"
                placement="bottom"
                delay={[0, 50]}
              >
                <button className={cx("btn-action")}>
                  <MessageIcon />
                </button>
              </TooltipTippy>
              <TooltipTippy content="Inbox" placement="bottom" delay={[0, 50]}>
                <button className={cx("btn-action")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </TooltipTippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuOnchange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5998875075b915dba41f22d45b11caa~c5_100x100.jpeg?x-expires=1671415200&x-signature=BDD5Uy6fxjvJ3xurejc1h7HHi%2FU%3D"
                alt=""
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
