import RegisterForm from "../components/RegisterForm.jsx";
import Header from "../components/Header.jsx";
import { Hero } from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import CTA from "../components/CTA.jsx";
import Requirements from "../components/Requirements.jsx";
import Benefits from "../components/Benefits.jsx";
import Faq from "../components/Faq.jsx";
const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Requirements />
        <Faq />
        <Benefits/>
        <RegisterForm/>
        <CTA/>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;