import angelsBaseball from "./images/angelsBaseball.jpg";
import "./App.css";
/**
 * LINK TO MLB API FOR 2021
 * https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=02/01/2021&endDate=11/30/2021
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={angelsBaseball} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.mlb.com/angels"
          target="_blank"
          rel="noopener noreferrer"
        >
          angels baseball website
        </a>
      </header>
    </div>
  );
}

export default App;
