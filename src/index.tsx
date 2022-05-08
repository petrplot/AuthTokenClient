import React, {createContext} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Page404 from "./pages/Page404";
import ContactStore from "./store/contactStore";
import UserStore from "./store/userStore";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const userStore = new UserStore();
const contactStore = new ContactStore();
export const Context = createContext({userStore, contactStore});

ReactDOM.render(
    <React.StrictMode>
      <Context.Provider value={{userStore, contactStore}}>
        <BrowserRouter>
          <App>
            <Routes>
              <Route path={"/"} element={<Main />} />
              <Route path={"/auth"} element={<Auth />} />
              <Route path={"*"} element={<Page404 />} />
            </Routes>
          </App>
        </BrowserRouter>
      </Context.Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);


reportWebVitals((e)=>console.log(e));
