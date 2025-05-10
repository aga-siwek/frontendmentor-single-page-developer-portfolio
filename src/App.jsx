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
            <div className="container background__patterns">
                <div className="top_container">
                    <Header/>
                </div>
                <div className="middle_container">
                    <div className="middle_container_top">
                        <AboutMe/>
                        <Photo/>

                    </div>
                    <div className="middle_container_bottom background__pattern__rings__middle">
                        <Experiances/>
                        <Projects/>
                    </div>
                </div>
                <div className="bottom_container background__pattern__rings__bottom">
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
