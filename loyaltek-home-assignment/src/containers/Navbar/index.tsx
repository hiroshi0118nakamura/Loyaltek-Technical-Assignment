import { NavbarView } from "components/views";
import { PATH } from "consts";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppActions, RootState } from "store";
import { IQueryArray } from "types";

export const NavbarContainer: React.FC = () => {
  const card = useSelector((store: RootState) => store.card);
  const { navbarState } = useSelector((store: RootState) => store.screen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { types, subtypes, supertypes, set } = card.result;
    const name = card.searchName;
    let query: string[] = [];
    name && query.push(`name=${name}`);
    types.length > 0 && query.push(`types=${types.join("|")}`);
    subtypes.length > 0 && query.push(`subtypes=${subtypes.join("|")}`);
    supertypes.length > 0 && query.push(`supertypes=${supertypes.join("|")}`);
    set.length > 0 && query.push(`sets=${set.join("|")}`);
    dispatch(AppActions.card.getCardRequest(query.join("&")));
    navigate(PATH.DASHBOARD);
  };
  return (
    <NavbarView
      state={navbarState}
      filter={card.filter}
      query={card.result}
      addQuery={(type: keyof IQueryArray, value: string) =>
        dispatch(AppActions.card.addQuery({ type, value }))
      }
      filterQuery={(type: keyof IQueryArray, value: string) =>
        dispatch(AppActions.card.filterQuery({ type, value }))
      }
      deleteQuery={(type: keyof IQueryArray, value: string) =>
        dispatch(AppActions.card.deleteQuery({ type, value }))
      }
      name={card.searchName}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        dispatch(AppActions.card.changeName(e.target.value))
      }
      onClick={onClick}
    />
  );
};
