import Header from "./pages/component/header";
import Footer from "./pages/component/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
        <img src="https://i.redd.it/ku4iwgruzrl61.jpg" height="300px"></img>
      </div>
      <Footer />
    </div>
  );
}

export default App;
