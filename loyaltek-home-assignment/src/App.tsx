import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PATH } from "consts";
import { DashboardPage, NotFoundPage } from "pages";
import { AppActions, RootState } from "store";

import "react-toastify/dist/ReactToastify.css";
import { Spin } from "components/common";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AppActions.card.getSetRequest());
    dispatch(AppActions.card.getTypesRequest());
    dispatch(AppActions.card.getSubtypesRequest());
    dispatch(AppActions.card.getSupertypesRequest());
  }, [dispatch]);
  const { loading } = useSelector((store: RootState) => store.load);
  return (
    <BrowserRouter>
      {loading ? <Spin /> : null}
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={PATH.INVALID_PATH}
          element={<Navigate to={PATH.NOT_FOUND} />}
        />
      </Routes>
      <ToastContainer autoClose={1500} theme="dark" />
    </BrowserRouter>
  );
}

export default App;
