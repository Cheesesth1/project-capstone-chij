import Header from "./pages/header";
import Footer from "./pages/footer";
import "./App.css";
import Cart from "./pages/cart";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>

      <Cart />
      <div className="cont_account">
        <div className="form_container">
          <div className="form-btn">
            <span>Login</span>
            <span>Register</span>
          </div>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="btn">
              Login
            </button>
            <a href="">Forgot password</a>
          </form>

          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
