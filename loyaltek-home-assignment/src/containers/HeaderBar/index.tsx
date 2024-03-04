import { HeaderBarView } from "components/views";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "store";

export const HeaderBarContainer: React.FC = () => {
  const { navbarState } = useSelector((store: RootState) => store.screen);
  const dispatch = useDispatch();
  const onNavbarChange = () => {
    dispatch(AppActions.screen.changeState());
  };
  return <HeaderBarView state={navbarState} onNavbarChange={onNavbarChange} />;
};
