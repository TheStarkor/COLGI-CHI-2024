import axios from "axios"
import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import 'antd/dist/antd.css';

function App() {
  axios.defaults.baseURL = "https://colgi-api.run.goorm.site";

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
