// components
import { TailSpin } from "react-loader-spinner";

const Loader = ({ h, w, color }) => {
  return (
    <>
      <TailSpin
        visible={true}
        height={h || 30}
        width={w || 30}
        color={color || "#000"}
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </>
  );
};

export default Loader;
