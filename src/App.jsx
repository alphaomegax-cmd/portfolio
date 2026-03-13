import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import Avi from "./components/Avi";
import { LanguageProvider } from "./context/LanguageContext";
const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-tr from-slate-900 to-sky-900">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Avi/>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
