import './App.css'
import Nav from './components/NavComponent/nav'
import Home from './components/HomeComponent/home'
import Footer from './components/FooterComponent/footer'
import { Routes, Route } from 'react-router-dom'
import About from './components/AboutComponent/about'
import Project from './components/ProjectComponent/project'
import Contact from './components/ContactComponent/contact'
import Portfolio from './components/PortfolioComponent/portfolio'
import Hospital from './components/HospitalComponent/Hospital'
import Weather from './components/WeatherComponent/Weather'
import StudentTask from './components/StudentComponent/StudentTask'
import Newslist from './components/NewsListComponent/Newslist'
import Brainvita from './components/BrainvitaComponent/Brainvita'
import RockPprGame from './components/RockPprScizrComponent/rockpprscizer'
export default function App() {
    return <>
        <header className='header'>
            <Nav />
        </header>
        <main>
            <Routes>
                <Route path='/' element={
                    <Home />
                } />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='hospital' element={<Hospital />} />
                <Route path='weatherapp' element={<Weather />} />
                <Route path='taskmanager' element={<StudentTask />} />
                <Route path='myPortfolio' element={<Portfolio />} />
                <Route path='newslist' element={<Newslist />} />
                <Route path='brainvitagame' element={<Brainvita />} />
                <Route path='/contactUs' element={<Contact />} />
                <Route path ='/rockpprscizer' element ={<RockPprGame/>}/>
            </Routes>
        </main>
        <br /><br /><br /><br /><br />
        <footer className='footer'>
            <Footer />
        </footer>
    </>
}