import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import { Footer } from "./components/Footer/Footer.component";
import { Home } from "./pages/Home/Home.page";
import { Events } from "./pages/Events/Events.page";
import { Contact } from "./pages/Contact/Contact.page";
import { Team } from "./pages/Team/Team.page";
import { Sponsor } from "./pages/Sponsor/Sponsor.page";
import { Impact } from "./pages/Impact/Impact.page";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <Home />
      <Events />
      <Team />
      <Impact />
      <Sponsor />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
