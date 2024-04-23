const Skeleton = ({ w, h, avatar, size }) => {
  const style = avatar
    ? {
        width: size || "50px",
        height: size || "50px",
      }
    : {
        width: w || "100px",
        height: h || "30px",
      };

  return (
    <div
      className={`bg-gray-200 animate-pulse ${
        avatar ? "rounded-full" : "rounded-xl"
      }`}
      style={style}
    />
  );
};

export default Skeleton;
