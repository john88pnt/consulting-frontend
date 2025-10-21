import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [projects, setProjects] = useState([]);
    const [activeSection, setActiveSection] = useState("home");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (activeSection === "projects") {
            fetch("https://consult-robotics-backend.onrender.com/api/projects")
                .then((res) => res.json())
                .then((data) => {
                    setProjects(data);
                    setLoading(false);
                })
                .catch((err) => console.error("Eroare la încărcare proiecte:", err));
        }
    }, [activeSection]);

    return (
        <div className="App">
            <header className="hero">
                <h1>Consult Robotics</h1>
                <p className="hero-subtitle">
                    Consultanță în integrare și programare roboți industriali KUKA și ABB
                </p>
                <p className="tagline">
                    Soluții inteligente pentru automatizări industriale moderne
                </p>
            </header>

            <nav>
                <button onClick={() => setActiveSection("home")}>Acasă</button>
                <button onClick={() => setActiveSection("projects")}>Proiecte</button>
                <button onClick={() => setActiveSection("contact")}>Contact</button>
            </nav>

            <main>
                {activeSection === "home" && (
                    <section className="home">
                        <h2>Bine ai venit la Consult Robotics</h2>
                        <p>
                            Oferim servicii profesionale de integrare, programare și optimizare
                            a roboților industriali. Experiență în soluții cu ABB, KUKA și
                            Mitsubishi Electric.
                        </p>
                    </section>
                )}

                {activeSection === "projects" && (
                    <section className="projects">
                        <h2>Proiecte realizate</h2>

                        {loading && <p className="loading">Se încarcă proiectele...</p>}

                        {!loading &&
                            projects.map((project, index) => (
                                <div key={index} className="project-card">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                    </section>
                )}

                {activeSection === "contact" && (
                    <section className="contact">
                        <h2>Contact</h2>
                        <p>
                            Ne poți scrie la{" "}
                            <a href="mailto:pantea.ionut@yahoo.com">
                                pantea.ionut@yahoo.com
                            </a>{" "}
                            pentru colaborări și oferte.
                        </p>
                    </section>
                )}
            </main>

            <footer>
                <p>© 2025 Consult Robotics | Integrare & Programare Roboți</p>
            </footer>
        </div>
    );
}

export default App;
