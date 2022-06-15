import "./App.css";
import Layout from "./components/Layout/Layout";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div className="App">
      <Layout>
        <Meals />
      </Layout>
    </div>
  );
}

export default App;
