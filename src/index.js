import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/main.scss";
import { Provider } from "react-redux";
import store from './store'

window.store = store;

ReactDOM.render(
    <Provider store={store}>

    <App />
    </Provider>,
     document.getElementById("root")
    );
    
reportWebVitals();
