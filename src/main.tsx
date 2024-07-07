import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { App } from "./components";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <App />
      <ToastContainer theme="dark" style={{ zIndex: 99999 }} autoClose={2000} />
    </BrowserRouter>
  </>
);
