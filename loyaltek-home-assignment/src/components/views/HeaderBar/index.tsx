import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Switcher from "utils/Switcher";

interface HeaderProps {
  onNavbarChange: () => void;
  state: boolean;
}

export const HeaderBarView: React.FC<HeaderProps> = ({
  state,
  onNavbarChange,
}) => {
  return (
    <div className="w-full min-h-10 font-bold bg-blue-500 flex">
      <button
        className="p-3 hover:bg-blue-700 transition-all duration-300"
        onClick={onNavbarChange}
      >
        {state ? <IoMenu width={20} /> : <IoMdClose width={20} />}
      </button>
      <h1 className="text-2xl m-auto">Magic the gathering</h1>
      <div className="flex items-center gap-2 pr-3">
        <Switcher />
      </div>
    </div>
  );
};
