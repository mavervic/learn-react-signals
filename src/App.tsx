import { signal } from "@preact/signals-react";
import "./App.css";
import logo from "./assets/react.svg";
import { appCount } from "./contexts/count.context";
import { appDogsData } from "./contexts/dogs.context";

const numDogs = signal(5);
appDogsData.useFetchBreedsQuery(numDogs);

function handleClick() {
  appCount.amountAdded(3);
  // appCount.increment();
}

// 就算重複設定也沒關係，因為會自動過濾重複的設定
// setInterval(() => {
//   numDogs.value = 5;
// }, 1000);

const Counter = () => {
  console.log("Counter render");

  return (
    <p>
      <button onClick={handleClick}>count is: {appCount.value} </button>
    </p>
  );
};

const Dog = () => {
  console.log("Dog render");

  return (
    <>
      <div>
        <p>Dogs to fetch:</p>
        <select
          value={numDogs.value}
          onChange={(e) => (numDogs.value = Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <p>Number of dogs fetched: {appDogsData.value.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {appDogsData.value.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

function App() {
  console.log("App render");
  // console.log({
  //   appCount,
  //   numDogs,
  //   appDogsData,
  // });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Counter />

        <Dog />

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
