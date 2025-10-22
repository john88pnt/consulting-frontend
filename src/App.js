import React, { useEffect, useState } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState("home"); // home, projects, services, contact

    useEffect(() => {
        if (page === "projects") {
            setLoading(true);
            fetch("https://consulting-backend-oqzo.onrender.com/projects")
                .then(res => res.json())
                .then(data => {
                    setProjects(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [page]);

    const renderHome = () => (
        <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-content">
                <h1>Consultanță în integrare și programare roboți industriali KUKA și ABB</h1>
                <div className="buttons">
                    <button onClick={() => setPage("projects")}>Proiecte</button>
                    <button onClick={() => setPage("services")}>Servicii</button>
                    <button onClick={() => setPage("contact")}>Contact</button>
                </div>
            </div>
        </div>
    );

    const renderProjects = () => (
        <div className="projects">
            {loading && <p className="loading-text">Se încarcă proiectele...</p>}
            <div className="project-list">
                {projects.map(proj => (
                    <div className="project-card" key={proj.title}>
                        <img src={proj.image} alt={proj.title} />
                        <h3>{proj.title}</h3>
                        <p className="short-desc">{proj.description}</p>
                        <button
                            className="details-btn"
                            onClick={e => {
                                const desc = e.target.nextElementSibling;
                                desc.classList.toggle("hidden");
                            }}
                        >
                            Detalii
                        </button>
                        <p className="long-desc hidden">{proj.longDescription}</p>
                    </div>
                ))}
            </div>
            <button className="back-button" onClick={() => setPage("home")}>
                Înapoi
            </button>
        </div>
    );

    const renderServices = () => (
        <div className="services">
            <h2>Servicii Consult Robotics</h2>
            <ul>
                <li>Integrare roboți industriali KUKA și ABB</li>
                <li>Programare și optimizare celule robotizate</li>
                <li>Automatizări industriale cu PLC și sisteme servo</li>
                <li>Sisteme de viziune și sortare inteligentă</li>
            </ul>
            <button className="back-button" onClick={() => setPage("home")}>
                Înapoi
            </button>
        </div>
    );

    const renderContact = () => (
        <div className="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:pantea.ionut@yahoo.com">pantea.ionut@yahoo.com</a></p>
            <p>Telefon: 0746928120</p>
            <p>Locație: Bistrița, România</p>
            <button className="back-button" onClick={() => setPage("home")}>
                Înapoi
            </button>
        </div>
    );

    return (
        <div className="App">
            {page === "home" && renderHome()}
            {page === "projects" && renderProjects()}
            {page === "services" && renderServices()}
            {page === "contact" && renderContact()}
        </div>
    );
}

export default App;
