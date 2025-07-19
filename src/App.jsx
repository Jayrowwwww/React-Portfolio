import Header from "./components/main/header";
import Landing_page from "./pages/landing_page.jsx";
import About from "./pages/about.jsx";
import Background_page from "./pages/background.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./components/main/footer";

export default function App() {
  return (
    <div className="flex flex-col items-center pt-3">
      <Header />
      <Landing_page/>   
      <About />
      <Background_page />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}