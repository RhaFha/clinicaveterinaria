import Header from "./components/Header";
import Items from "./components/Items";

function App() {

  const itemsd = [];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Header />
        <Items />
      </div>
    </div>
  );
}

export default App;
