import { StatusbarComponent } from "components/views";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const StatusbarContainer: React.FC = () => {
  const { myCard, avgCMC } = useSelector((store: RootState) => store.card);
  return <StatusbarComponent length={myCard.size} cmc={avgCMC} />;
};
