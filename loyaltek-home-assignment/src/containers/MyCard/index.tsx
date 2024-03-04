import { DashboardView } from "components/views";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "store";

export const MyCardContainer: React.FC = () => {
  const { myCard } = useSelector((store: RootState) => store.card);
  const dispatch = useDispatch();
  const removeCard = (word: string) => {
    dispatch(AppActions.card.removeCard(word));
  };
  return (
    <DashboardView
      cards={myCard}
      button={{ onClick: removeCard, label: "Remove Card" }}
    />
  );
};
