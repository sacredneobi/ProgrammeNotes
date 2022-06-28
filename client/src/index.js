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
        options.headers = {
          Authorization:
            "JWT " +
            (localStorage.getItem("JWT") ? localStorage.getItem("JWT") : null),
          "Content-Type": "application/json",
        };
        return options;
      },
      response: (props) => {
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
