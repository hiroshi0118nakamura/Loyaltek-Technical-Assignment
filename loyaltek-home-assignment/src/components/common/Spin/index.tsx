import { ImSpinner2 } from "react-icons/im";

export const Spin: React.FC = () => {
  return (
    <div className="w-full h-full bg-black bg-opacity-60 absolute z-20 flex backdrop-blur-sm">
      <ImSpinner2 color="white" className="w-20 h-20 m-auto animate-spin" />
    </div>
  );
};
