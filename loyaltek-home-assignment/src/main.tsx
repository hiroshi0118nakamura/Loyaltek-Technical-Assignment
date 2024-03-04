import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { enableMapSet } from "immer";

import App from "./App.tsx";
import "./index.css";
import { store } from "store/index.ts";

enableMapSet();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
