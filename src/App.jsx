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
      <div className="flex flex-col items-center right-10 top-20 fixed">
        <a href="#top" className="flex items-center justify-center bg-gray-200 h-10 w-10 rounded-full hover:bg-gray-700 hover:text-white">
          <i class="fa-solid fa-angle-up z-1"></i>
        </a>

        <p className="text-black">Go Top!</p>
      </div>
      <About />
      <Background_page />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}