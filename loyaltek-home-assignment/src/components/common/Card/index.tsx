import { ICard } from "types";
import R from "assets/R.svg";
import G from "assets/G.svg";
import V from "assets/V.svg";
import W from "assets/W.svg";
import B from "assets/B.svg";

interface CardProps {
  card: ICard;
  button: {
    label: string;
    onClick: (w: string) => void;
  };
}
interface ManaType {
  [key: string]: string;
  R: string;
  G: string;
  V: string;
  W: string;
  B: string;
}
const manaType: ManaType = {
  R: R,
  G: G,
  V: V,
  W: W,
  B: B,
};

const manaString = (manaCost: string) => {
  const symbol = manaCost.substring(1, manaCost.length - 1).split("}{");
  return (
    <div className="flex items-center justify-end gap-1">
      {symbol.map((symbol, index) =>
        manaType[symbol] ? (
          <img src={manaType[symbol]} alt={symbol} key={index} width={16} />
        ) : (
          <span key={index}>{symbol}</span>
        )
      )}
    </div>
  );
};

export const Card: React.FC<CardProps> = ({ card, button }) => {
  return (
    <div className="group w-full min-h-64 max-h-64 dark:bg-black bg-white dark:text-white text-black p-2 rounded-md flex flex-col justify-between relative">
      <button
        className="w-auto inset-0 absolute text-transparent group-hover hover:text-white bg-opacity-0 hover:bg-opacity-80 bg-black transition-all rounded-md"
        onClick={() => button.onClick(card.name)}
      >
        {button.label}
      </button>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between text-xl gap-1">
          <span className="max-h-7 overflow-hidden">{card.name}</span>
          {manaString(card.manaCost || "0")}
        </div>
        <div className="text-lg max-h-6 overflow-hidden">{card.type}</div>
        <div className="text-sm max-h-36 overflow-y-hidden">{card.text}</div>
      </div>
      <div className="flex items-center justify-between">
        <span>{card.cmc}CMC</span>
        <span>
          {card.power || 0}/{card.toughness || 0}
        </span>
      </div>
    </div>
  );
};
