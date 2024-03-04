import { Card } from "components/common";
import { ICard } from "types";

interface DashboardViewProps {
  cards: Map<string, ICard>;
  button: {
    label: string;
    onClick: (word: string) => void;
  };
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  cards,
  button,
}) => {
  return (
    <div className="w-full h-auto overflow-y-auto p-5 grid enterprise:grid-cols-5 desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-2">
      {Array.from(cards).map(([key, value]) => (
        <Card card={value} button={button} key={key} />
      ))}
    </div>
  );
};
