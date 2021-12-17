import "./App.css";
import Feed from "./components/article/Feed";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
