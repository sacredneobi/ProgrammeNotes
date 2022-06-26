import ReactDOM from "react-dom/client";
import { Provider } from "use-http";
import Dashboard from "./dashboard";
import { Login, pages } from "./pages";
import "./localization";

const Default = (props) => {
  const options = {
    cachePolicy: "no-cache",
    interceptors: {
      request: async ({ options }) => {
        console.log("request");
        options.headers = {
          Authorization: "XXXXXXXXXX",
          "Content-Type": "application/json",
        };
        return options;
      },
      response: (props) => {
        console.log("response");
        // if (401 === props.response?.status) {
        // }
        return props.response;
      },
    },
  };

  return (
    <Provider options={options}>
      <Dashboard login={Login} pages={pages} />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Default />
  // </React.StrictMode>
);
