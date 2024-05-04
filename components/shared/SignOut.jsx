"use client";

// actions
import { signOut } from "@/actions/auth.action";

const SignOut = ({
  wrapperClassName,
  icon,
  title,
  iconClassName,
  titleClassName,
}) => {
  return (
    <button
      type="button"
      className={wrapperClassName || ""}
      onClick={() => signOut()}
    >
      {icon && <div className={iconClassName || ""}>{icon}</div>}
      {title && <p className={titleClassName || ""}>{title}</p>}
    </button>
  );
};

export default SignOut;
