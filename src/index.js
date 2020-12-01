import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import stores from "./store";
import { Provider } from "mobx-react";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={"thcnoob.us.auth0.com"} //    domain={"thcnoob.us.auth0.com"} //
    clientId={"7QXDIvSzCfDU3LmgwVfnsZILr7EVYxqa"} //    clientId={"7QXDIvSzCfDU3LmgwVfnsZILr7EVYxqa"} //
    redirectUri={`${window.location.origin}/nooblog`}
  >
    <Provider {...stores}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
