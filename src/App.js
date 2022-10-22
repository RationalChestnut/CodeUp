import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import { Footer } from "./components/Footer/Footer.component";
import { Home } from "./pages/Home/Home.page";
import { Events } from "./pages/Events/Events.page";
import { Contact } from "./pages/Contact/Contact.page";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <Home />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
