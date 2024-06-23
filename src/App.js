// eslint-disable-next-line no-unused-vars
// src/index.js or src/App.js, etc.
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './Content/ThemeContent';
import Jello from 'react-reveal/Jello';
import MobileNav from './components/MobilNav/MobileNav';
function App() {
  const [theme]=useTheme();
  return (
    <>
    <div id={theme}>

    <MobileNav/>
     <Layout/>
     <div className="container">
     <About/>
     <Education />
     <TechStack />
    
     <Projects />
     <WorkExp />
     <Contact />
     </div>
     <Jello>
     <div className="footer pb-3 ms-3">
      <h4 className="text-center " > Made With❤️ Hitesh &copy; 2024</h4>
     </div>
     </Jello>
     </div>
     <ScrollToTop smooth color='#f70776' style={{backgroundColor:"#1e1e2c", borderRadius:"80px",}}/>
    </>
  );
}

export default App;
