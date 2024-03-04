import { Link, useLocation } from "react-router-dom";

import { PATH } from "consts";

interface StatusbarProps {
  length: number;
  cmc: number;
}

export const StatusbarComponent: React.FC<StatusbarProps> = ({
  length,
  cmc,
}) => {
  const location = useLocation();
  return (
    <div className="w-full bg-blue-500 flex items-center justify-between min-h-10 max-h-10">
      <Link
        className="px-5 bg-blue-800 h-full flex items-center"
        to={location.pathname === PATH.MYCARD ? PATH.DASHBOARD : PATH.MYCARD}
      >
        {location.pathname === PATH.MYCARD ? "Search Card" : "My Card"}
      </Link>
      <div className="flex items-center h-full bg-blue-800">
        <span className="px-2 h-full flex items-center border-l-2 border-blue-300">
          Total: {length}
        </span>
        <span className="px-2 h-full flex items-center border-l-2 border-blue-300">
          Average ManaCost: {cmc.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
