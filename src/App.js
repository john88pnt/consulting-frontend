import React, { useState, useEffect } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
    const [projects, setProjects] = useState([]);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        fetch("https://consulting-backend-oqzo.onrender.com/api/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Eroare la încărcarea proiectelor:", error));
    }, []);

    return (
        <div className="App">
            {/* HERO SECTION */}
            <header className="hero">
                <div className="hero-content">
                    <h1>Consult Robotics</h1>
                    <h2>Consultanță în integrare și programare roboți industriali KUKA și ABB</h2>
                    <div className="hero-buttons">
                        <button onClick={() => setShowProjects(!showProjects)}>Proiecte</button>
                        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                            Contact
                        </button>
                    </div>
                </div>
            </header>

            {/* PROJECTS SECTION */}
            {showProjects && (
                <section className="projects">
                    <h2>Proiecte realizate</h2>
                    <div className="project-grid">
                        {projects.map((proj) => (
                            <div key={proj.id} className="project-card">
                                <img src={proj.image} alt={proj.title} />
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                <button>Detalii</button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CONTACT SECTION */}
            <footer className="contact">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:pantea.ionut@yahoo.com">pantea.ionut@yahoo.com</a></p>
                <p>Telefon: 0746 928 120</p>
                <p>Locație: Bistrița, România</p>
            </footer>
        </div>
    );
}

export default App;
