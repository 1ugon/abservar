import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
      "--x",
      e.clientX + window.scrollX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      e.clientY + window.scrollY + "px"
    );
  };
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
