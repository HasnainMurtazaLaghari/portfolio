import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            {/* Main Background with animated particles and geometric shapes */}
            <div className="app-background">
                <div className="bg-gradient"></div>
                <div className="grid-overlay"></div>

                {/* Geometric Shapes */}
                <div className="geometric-bg">
                    <div className="geo-shape triangle1"></div>
                    <div className="geo-shape triangle2"></div>
                    <div className="geo-shape triangle3"></div>
                    <div className="geo-shape triangle4"></div>
                    <div className="geo-shape diamond1"></div>
                    <div className="geo-shape diamond2"></div>
                    <div className="geo-shape diamond3"></div>
                    <div className="geo-shape hexagon1"></div>
                    <div className="geo-shape hexagon2"></div>
                    <div className="geo-shape square1"></div>
                    <div className="geo-shape square2"></div>
                    <div className="geo-shape pentagon1"></div>
                    <div className="geo-shape pentagon2"></div>
                    <div className="geo-shape star1"></div>
                    <div className="geo-shape star2"></div>
                    <div className="geo-shape cross1"></div>
                </div>

                {/* Particles */}
                <div className="hero-particles">
                    <div className="particle particle1"></div>
                    <div className="particle particle2"></div>
                    <div className="particle particle3"></div>
                    <div className="particle particle4"></div>
                    <div className="particle particle5"></div>
                    <div className="particle particle6"></div>
                    <div className="particle particle7"></div>
                    <div className="particle particle8"></div>
                    <div className="particle particle9"></div>
                    <div className="particle particle10"></div>
                    <div className="particle particle11"></div>
                    <div className="particle particle12"></div>
                    <div className="particle particle13"></div>
                    <div className="particle particle14"></div>
                    <div className="particle particle15"></div>
                </div>

                {/* Glow Effects */}
                <div className="hero-glow g1"></div>
                <div className="hero-glow g2"></div>
                <div className="hero-glow g3"></div>
                <div className="hero-glow g4"></div>
                <div className="hero-glow g5"></div>

                {/* Stars */}
                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="app-content">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;