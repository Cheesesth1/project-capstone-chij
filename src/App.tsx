import Header from "./pages/header";
import Footer from "./pages/footer";
import "./App.css";
import Api from "./api/Api";

const App = () => {
  return (
    <div>
      <Header />

      <div className="container"></div>
      <Api />

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
