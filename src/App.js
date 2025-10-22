import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://consulting-backend-oqzo.onrender.com/projects")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const goToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="App">
            {/* Hero */}
            <header className="hero">
                <h1>Consultanță în integrare și programare roboți industriali KUKA și ABB</h1>
                <div className="nav-buttons">
                    <button className="nav-btn" onClick={() => goToSection("projects")}>
                        Proiecte
                    </button>
                    <button className="nav-btn" onClick={() => goToSection("services")}>
                        Servicii
                    </button>
                    <button className="nav-btn" onClick={() => goToSection("contact")}>
                        Contact
                    </button>
                </div>
            </header>

            {/* Projects */}
            <section id="projects">
                <h2>Proiecte</h2>
                {loading && <p>Se încarcă proiectele...</p>}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={`https://consulting-backend-oqzo.onrender.com${project.image}`} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <details>
                                <summary>Detalii</summary>
                                <p>{project.longDescription}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section id="services">
                <h2>Servicii</h2>
                <p>Oferim consultanță în integrare și programare roboți industriali KUKA și ABB pentru proiecte B2B.</p>
            </section>

            {/* Contact */}
            <section id="contact">
                <h2>Contact</h2>
                <p>Email: pantea.ionut@yahoo.com</p>
                <p>Telefon: 0746928120</p>
                <p>Locație: Bistrița, România</p>
            </section>
        </div>
    );
}

export default App;
