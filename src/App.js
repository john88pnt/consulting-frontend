import React, { useState, useEffect } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
    const [view, setView] = useState("home");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleShowProjects = () => {
        setView("projects");
        setLoading(true);

        fetch("https://consulting-backend-oqzo.onrender.com/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Eroare la preluarea proiectelor:", err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="App">
            {/* PAGINA PRINCIPALĂ */}
            {view === "home" && (
                <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
                    <div className="hero-content">
                        <h1>
                            Consultanță în integrare și programare roboți industriali KUKA și ABB
                        </h1>
                        <div className="buttons">
                            <button onClick={handleShowProjects}>Proiecte</button>
                            <button onClick={() => setView("services")}>Servicii</button>
                            <button onClick={() => setView("contact")}>Contact</button>
                        </div>
                    </div>
                </div>
            )}

            {/* PAGINA PROIECTE */}
            {view === "projects" && (
                <div className="projects">
                    <h2>Proiectele noastre</h2>
                    {loading ? (
                        <p className="loading-text">Se încarcă proiectele...</p>
                    ) : (
                        <div className="project-list">
                            {projects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <img src={project.image} alt={project.title} />
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="back-button" onClick={() => setView("home")}>
                        ← Înapoi
                    </button>
                </div>
            )}

            {/* PAGINA SERVICII */}
            {view === "services" && (
                <div className="services">
                    <h2>Serviciile oferite</h2>
                    <ul>
                        <li>Programare roboți industriali KUKA și ABB</li>
                        <li>Integrare sisteme robotizate în linii de producție</li>
                        <li>Simulare și optimizare procese robotizate (RobotStudio, KUKA.Sim)</li>
                    </ul>
                    <button className="back-button" onClick={() => setView("home")}>
                        ← Înapoi
                    </button>
                </div>
            )}

            {/* PAGINA CONTACT */}
            {view === "contact" && (
                <div className="contact">
                    <h2>Contact</h2>
                    <p>
                        Pentru colaborări sau consultanță, ne poți contacta la:<br />
                        <strong>Email:</strong> pantea.ionut@yahoo.com<br />
                        <strong>Locație:</strong> Bistrița, România<br />
                        <strong>Telefon:</strong> 0746928120
                    </p>
                    <button className="back-button" onClick={() => setView("home")}>
                        ← Înapoi
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
