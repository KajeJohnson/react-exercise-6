import { queryByPlaceholderText } from "@testing-library/react";
import "./App.css";
import Quotes from "./components/Quotes";
import fetchAllQuotes from "./services/quotes.service";

function App() {
  return (
    <div className="App">
      <Quotes />
    </div>
  );
}

export default App;
