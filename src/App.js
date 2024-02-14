import './App.scss';
import { Routes , Route} from 'react-router-dom';
import About from './components/About/about.js';
import Layout from './components/Layout/layout.js';
import Home from './components/Home/home.js';
import Contact from "./components/Contact/contact.js";
import Projects from "./components/Projects/projects.js"







export default function App() {
  return (
    <>
      <Routes>
       <Route path = "/" element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
       </Route>
      </Routes>
    </>
  )
}