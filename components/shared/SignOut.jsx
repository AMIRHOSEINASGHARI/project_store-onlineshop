"use client";

const SignOut = ({
  wrapperClassName,
  icon,
  title,
  iconClassName,
  titleClassName,
}) => {
  return (
    <button type="button" className={wrapperClassName || ""}>
      {icon && <div className={iconClassName}>{icon}</div>}
      {title && <p className={titleClassName}>{title}</p>}
    </button>
  );
};

export default SignOut;
