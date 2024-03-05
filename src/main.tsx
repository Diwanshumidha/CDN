// @ts-nocheck

import ReactDOM from "react-dom";
import App from "./App.tsx";

window.Chatbot = {
  mount: function (el) {
    ReactDOM.render(<App />, el);
  },
};
