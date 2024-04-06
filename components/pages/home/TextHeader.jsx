const TextHeader = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-[30px] font-bold">{title}</h1>
      {subtitle && <p className="text-[15px] text-gray-500">{subtitle}</p>}
    </>
  );
};

export default TextHeader;
