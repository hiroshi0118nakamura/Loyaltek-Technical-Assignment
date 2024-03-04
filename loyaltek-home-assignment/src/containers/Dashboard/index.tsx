import { DashboardView } from "components/views";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "store";

export const DashboardContainer: React.FC = () => {
  const { cards } = useSelector((store: RootState) => store.card);
  const dispatch = useDispatch();
  const addCard = (word: string) => {
    dispatch(AppActions.card.addCard(word));
  };
  return (
    <DashboardView
      cards={cards}
      button={{ label: "Add Card", onClick: addCard }}
    />
  );
};
