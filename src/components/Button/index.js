import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  className,
  leftIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const _props = {
    onClick,
    ...passProps, //Add các prop chưa được định nghĩa trước
  };

  if (disabled) {
    // Loại bỏ các event khi button disabled
    Object.keys(_props).forEach((key) => {
      if (key.startsWith("on") && typeof _props[key] === "function") {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
  });

  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
