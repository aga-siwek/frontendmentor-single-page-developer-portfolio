import './App.css'
import Header from "./components/Header/Header.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Experiances from "./components/Experiances/Experiances.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Photo from "./components/common/Photo/Photo.jsx";

function App() {

    return (
        <>
            <div className="container">
                <div className="top_container">
                    <Header/>

                    <Photo/>
                </div>
                    <AboutMe/>


                <Experiances/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

export default App
