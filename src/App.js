import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import { Footer } from "./components/Footer/Footer.component";
import { Home } from "./pages/Home/Home.page";
import { Events } from "./pages/Events/Events.page";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <div className="page-padding">
        <Home />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default App;
