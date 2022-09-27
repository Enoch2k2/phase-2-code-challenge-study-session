import { useEffect } from "react";
import List from "./components/List";
import Search from "./components/Search";


const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(resp => resp.json())
      .then(data => setItems(data))
  }, [])

  return (
    <div className="App">
      <h1>Code Challenges</h1>
      <Search />
      <List items={ items } />
    </div>
  );
}

export default App;
